import parse from 'csv-parse/lib/sync';

const options = {
  childList: true,
  subtree: true,
  attributes: true,
};

const tagCheckerCallback = (doc, idsInCsv) => () => {
  const elements = doc.querySelectorAll('a, button');
  elements.forEach(element => {
    const id = element.getAttribute('id');
    if (id === null)
      throw new Error(
        `\nMissing id attribute on element:\n\n${element.outerHTML}\n\nin page ${doc.URL}`
      );
    else if (!idsInCsv.includes(id))
      throw new Error(
        `id attribute "${id}"  is not present in id.tags.csv\n\n found on element:\n\n${element.outerHTML}\n\n in page ${doc.URL}\n\n`
      );
  });
};

Cypress.Commands.overwrite('visit', (originalVisit, url, visitOptions) => {
  cy.fixture('id.tags.csv').then(csv => {
    const parsed = parse(csv, { columns: true });
    const idsInCsv = parsed.map(x => x['#id'].slice(1));

    cy.window().then(appWindow => {
      originalVisit(url, {
        ...visitOptions,
        onLoad: () => {
          const tagChecker = new appWindow.MutationObserver(
            tagCheckerCallback(appWindow.document, idsInCsv)
          );
          tagChecker.observe(appWindow.document.body, options);
        },
      });
    });
  });
});

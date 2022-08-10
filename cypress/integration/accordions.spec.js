describe('your benefits', () => {
  it('clicking a link in the in brief box opens an accordion elsewhere', () => {
    cy.visit('/your-benefits');
    cy.getWithDataName('in-brief__tax-limits').wait(150).click({ force: true });
    cy.log('does the content now exist?');
    cy.getWithDataName('accordion-content__tax');
  });
});

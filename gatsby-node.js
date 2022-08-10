const documentsToShow = require('./config/documentExtraData');
const documentsToShowNames = documentsToShow.map(x => x.name);

module.exports = {
  onCreateNode: ({ node, actions: { createNodeField } }) => {
    /** Add supplementary information for the UI about files in src/documents.
     * If the information is missing for a file, it throws an error.
     */
    const {
      sourceInstanceName,
      name,
      internal: { type },
    } = node;

    if (sourceInstanceName === 'documents' && type === 'File') {
      const matchedDocument = documentsToShow.find(x => x.name === name);

      if (matchedDocument === undefined) {
        throw new Error(
          `Found document ${name} that was not in 'config/documentsToShow.js' - only found:${documentsToShowNames.join(
            ', '
          )}. Either add it to the list or delete it if it is no longer MSMediaKeyNeededEvent.`
        );
      }

      createNodeField({
        node,
        name: 'headingText',
        value: matchedDocument.headingText,
      });

      createNodeField({
        node,
        name: 'descriptionText',
        value: matchedDocument.descriptionText,
      });
      createNodeField({
        node,
        name: 'linkText',
        value: matchedDocument.linkText,
      });
    }
  },
};

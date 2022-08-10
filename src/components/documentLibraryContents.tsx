import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TriangleBoxes from './triangleBoxes';

interface DocumentFromQuery {
  name: string;
  publicURL: string;
  fields: {
    headingText: string;
    descriptionText: string;
    linkText: string;
  };
}

const DocumentLibraryContents = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query DocumentLibrary {
      allFile(filter: { sourceInstanceName: { eq: "documents" } }) {
        edges {
          node {
            publicURL
            name
            fields {
              headingText
              descriptionText
              linkText
            }
          }
        }
      }
    }
  `);

  const boxes = edges.map(
    ({
      node: {
        publicURL,
        name,
        fields: { headingText, descriptionText, linkText },
      },
    }) => ({
      headingText,
      linkUrl: publicURL,
      linkText: `${linkText}`,
      name,
      descriptionText,
    })
  );
  return <TriangleBoxes boxes={boxes} />;
};

export default DocumentLibraryContents;

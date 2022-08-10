import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/layout';
import Banner from '../components/banner';
import DocumentLibraryContents from '../components/documentLibraryContents';

const DocumentLibrary = () => (
  <Layout pageName="document-library">
    <GatsbySeo title="Document library" />
    <Banner imageName="buildings">
      <h2 className="banner__heading">Document library</h2>
      <p className="banner__text">
        Here you can find useful documents relating to the DB Plan.
      </p>
    </Banner>
    <DocumentLibraryContents />;
  </Layout>
);

export default DocumentLibrary;

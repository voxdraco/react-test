import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const PageNotFound = () => (
  <Layout pageName="404">
    <div className="main__content">
      <h2>Page not found</h2>
      <p>
        Unfortunately we couldn't find that page. Please try going to our{' '}
        <Link to="/">homepage</Link> to find what you are looking for.
      </p>
    </div>
  </Layout>
);

export default PageNotFound;

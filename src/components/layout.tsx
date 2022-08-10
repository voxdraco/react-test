import React from 'react';
import favicon from '../images/favicon.ico';
import Helmet from 'react-helmet';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Header from './header';
import Footer from './footer';

import '../styles/flexbox-grid.css';
import '../styles/flexboxgrid-helpers.min.css';
import '../styles/styles.scss';

interface Props {
  pageName: string;
}

const Layout: React.FC<Props> = ({ children, pageName }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <GatsbySeo />
    <a className="layout__skip" href="#main">
      Skip to content
    </a>
    <div id="modal" />
    <div data-name={`page__${pageName}`}>
      <div className="layout__container">
        <div className="layout__content">
          <Header />
          <main id="main"> {children}</main>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;

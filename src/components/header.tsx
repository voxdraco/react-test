import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import Navbar from './navbar';

const navbarItems = [
  { url: '/', text: 'Home', name: 'home' },
  { url: '/your-benefits', text: 'Your benefits', name: 'your-benefits' },
  {
    url: '/pensions-in-payment',
    text: 'Pensions in payment',
    name: 'pensions-in-payment',
  },
  {
    url: '/document-library',
    text: 'Document library',
    name: 'document-library',
  },
  { url: '/contacts', text: 'Contacts', name: 'contacts' },
];

const Header = () => {
  const data = useStaticQuery(graphql`
    query Query {
      goldmanSachs: file(
        name: { eq: "goldmanSachs" }
        sourceInstanceName: { eq: "logos" }
      ) {
        childImageSharp {
          fixed(height: 55) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      retirementPlan: file(
        name: { eq: "retirementPlan" }
        sourceInstanceName: { eq: "logos" }
      ) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  const goldmanSachsFixed = data.goldmanSachs.childImageSharp.fixed;
  const retirementPlanFixed = data.retirementPlan.childImageSharp.fixed;

  return (
    <header className="header__container">
      <div className="row">
        <div className="col-xs-4 col-md-3 ">
          <h1
            className="header__logos"
            aria-label="Goldman Sachs retirement plan"
          >
            <Link to="/" tabIndex={-1}>
              <GatsbyImage
                fixed={goldmanSachsFixed}
                className="header__logo"
                alt="Goldman Sachs"
                fadeIn={false}
                loading="eager"
              />
            </Link>
            <Link to="/" tabIndex={-1}>
              <GatsbyImage
                fixed={retirementPlanFixed}
                className="header__logo"
                alt="retirement plan"
                fadeIn={false}
                loading="eager"
              />
            </Link>
          </h1>
        </div>
        <div className="col-xs-8 col-md-9">
          <Navbar items={navbarItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/layout';
import Banner from '../components/banner';
import TriangleBoxes from '../components/triangleBoxes';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { URL_AON_PORTAL } from '../urls';
import PortalModal from '../components/portalModal';

const HomePage = () => (
  <Layout pageName="home">
    <GatsbySeo title="Homepage" />
    <Banner imageName="multicoloredCardsStacked">
      <h2 className="banner__heading">
        Your future matters. <br /> Stay connected with your retirement
        benefits.
      </h2>
      <p className="banner__text">
        The website for the Defined Benefit (DB) section of the Goldman Sachs UK
        Retirement Plan.
      </p>
    </Banner>

    <section className="section__container">
      <div className="main__content">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <p>
              Welcome to the Goldman Sachs UK Retirement Plan website, providing
              information and resources for deferred and pensioner members of
              the Defined Benefit (DB) section of the Plan.
            </p>

            <p>
              If you are yet to take your benefits, there is information on how
              your pension at retirement is calculated and where to go for an
              up-to-date estimate.
            </p>

            <p>
              For members already receiving a pension from the Plan, there is
              information about how your pension increases and where to find
              your online payslip.
            </p>

            <p>We hope you find the website a useful resource.</p>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="sidebox__container">
              <h3 className="sidebox__heading">Update your personal details</h3>
              <p>
                If you’ve moved address or any of your contact information has
                changed, it’s important to let us know. This is so you can still
                receive important information from us about your pension,
                especially as you start to move closer towards retirement.
              </p>

              <p>
                You can update your personal details through the Aon portal –
                once logged in, select the ‘Personal details’ link in the top
                right corner of the page.
              </p>

              <PortalModal
                styleName="linkbutton__element linkbutton__element--dark"
                text="Visit the Aon Portal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container">
      <TriangleBoxes
        boxes={[
          {
            headingText: 'Do you have a deferred pension?',
            descriptionText:
              'See how your DB benefits are calculated, how to check their value and what the latest tax limits are.',
            linkUrl: '/your-benefits',
            name: 'yourbenefits',
            linkText: 'Explore your benefits',
          },
          {
            headingText: 'Already in receipt of a pension?',
            descriptionText:
              "Find out how your pension increases and why it's important to keep us updated if your circumstances change.",
            linkUrl: '/pensions-in-payment',
            name: 'pensionsinpayment',
            linkText: 'About your pension',
          },
          {
            headingText: 'Find a document or form',
            descriptionText:
              'Read about the latest valuation, how to protect your savings from scams and more.',
            linkUrl: '/document-library',
            name: 'document-library',
            linkText: 'Find a document',
          },
        ]}
      />
    </section>
  </Layout>
);

export default HomePage;

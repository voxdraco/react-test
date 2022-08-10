import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/layout';
import Banner from '../components/banner';
import TriangleBoxes from '../components/triangleBoxes';
import { URL_LIFESIGHT } from '../urls';

import PortalModal from '../components/portalModal';

const Contacts = () => (
  <Layout pageName="contacts">
    <GatsbySeo title="Contacts" />
    <Banner imageName="macarons">
      <h2 className="banner__heading">Contacts</h2>

      <p className="banner__text">
        If you have a query about your pension and are unable to find the
        information you’re looking for, please get in touch using the details
        below.
      </p>
    </Banner>

    <TriangleBoxes
      boxes={[
        {
          headingText: 'Aon helpline',
          descriptionText: (
            <>
              <p tabIndex={0}>
                If you are having trouble accessing the <PortalModal /> or have
                a query about the Plan rules or a communication you have
                received, please contact the Aon helpline.
              </p>

              <address tabIndex={0}>
                <div>0370 243 0101</div>
                <div>gspensions@aonhewitt.com </div>
              </address>
            </>
          ),
          linkUrl: 'mailto:gspensions@aonhewitt.com',
          linkText: 'Email the Aon team',
          name: 'aon-helpline',
        },
        {
          headingText: 'GSUK pensions team',
          descriptionText:
            'If you would like to escalate an issue or have a query relating to Plan policy, please contact the pensions team.',
          linkUrl: 'mailto:hcm-ln-benefits-team@ln.email.gs.com',
          linkText: 'Email the GSUK team',
          name: 'G-S-U-K-team',
        },
        {
          headingText: 'LifeSight',
          descriptionText:
            'If you have a question relating to your DC benefits, please visit the LifeSight website.',
          linkUrl: URL_LIFESIGHT,
          linkText: 'Visit the LifeSight website',
          name: 'lifesight',
        },
      ]}
    />
  </Layout>
);

export default Contacts;

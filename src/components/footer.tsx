import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PortalModal from './portalModal';

const Footer = () => {
  const {
    privacyNotice: { publicURL: privacyNoticeUrl },
  } = useStaticQuery(graphql`
    query Footer {
      privacyNotice: file(name: { eq: "privacy-notice" }) {
        publicURL
      }
    }
  `);

  return (
    <footer className="footer__container">
      <div className="footer__content">
        <dl className="row">
          <div className="col-xs-12 col-sm-4  footer__item">
            <dt>Aon Portal</dt>
            <dd>
              Access your account on the{' '}
              <PortalModal styleName="standard-link--white" />.
            </dd>
          </div>
          <div className="col-xs-12 col-sm-4 footer__item">
            <dt>Still have some questions?</dt>

            <dd>
              If you can’t find the information you’re looking for through the
              website or on the <PortalModal styleName="standard-link--white" />
              , you can contact the{' '}
              <Link to="/contacts">Aon Pensions team</Link>.
            </dd>
          </div>
          <div className="col-xs-12 col-sm-4 footer__item">
            <dt>Links</dt>
            <dd>
              <OutboundLink href={privacyNoticeUrl}>
                Privacy policy
              </OutboundLink>
            </dd>
            <dd>
              <Link to="/cookie-policy">Cookie policy</Link>
            </dd>
          </div>
        </dl>
      </div>
    </footer>
  );
};

export default Footer;

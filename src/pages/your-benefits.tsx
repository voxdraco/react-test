import React, { useState } from 'react';

import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/layout';
import Explanations from '../components/explanations';
import Banner from '../components/banner';
import PortalModal from '../components/portalModal';
import { TriangleBox } from '../components/triangleBoxes';

import builtUpInfographic from '../images/infographics/builtUp.svg';
import calculatedFromInfographic from '../images/infographics/calculatedFrom.svg';
import receivePensionInfographic from '../images/infographics/receivePension.svg';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { URL_AON_PORTAL, URL_LIFESIGHT } from '../urls';

const YourBenefits = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  return (
    <Layout pageName="your-benefits">
      <GatsbySeo title="Your benefits" />
      <Banner imageName="umbrella">
        <h2>Your Defined Benefit pension</h2>

        <p>
          The following information is for deferred members of the Plan who are
          yet to draw their benefits.
        </p>
      </Banner>

      <div className="main__content">
        <div className="row">
          <div className="col-sm-7 col-xs-12">
            <section>
              <div className="section__container">
                <h3>Your benefits explained</h3>

                <p>
                  If you started working for Goldman Sachs in the UK (the Firm)
                  before April 2008, it is likely you will have built up
                  benefits in the Defined Benefit (DB) Plan. You may have also
                  heard these benefits referred to as ‘Final Salary’ benefits.
                  The DB Plan will provide you with a pension for life when you
                  stop working, so it is a valuable benefit for your future. The
                  amount of pension you will receive is linked to your salary
                  and the length of your membership when the DB Plan closed to
                  future benefit build up in 2016. The longer you worked for the
                  Firm, the more pension you will have built up.
                </p>

                <p>The DB Plan closed to future benefit build up in 2016.</p>
              </div>
            </section>

            <section>
              <h3>How it works</h3>

              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="infographic__container">
                    <img
                      src={receivePensionInfographic}
                      alt="Hands holding coins"
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xs-12">
                  When you retire, you receive a pension from the DB Plan for
                  the rest of your life. You may also be able to convert part of
                  your pension to take as a tax-free cash lump sum.
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="infographic__container">
                    <img
                      src={calculatedFromInfographic}
                      alt="A calendar, wallet, and calculator"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  This pension is calculated based on your period of service
                  before the Plan closed to future build up, your Final
                  Pensionable Salary and an accrual rate of 1/80.
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="infographic__container">
                    <img
                      src={builtUpInfographic}
                      alt="A pile of coins, a graph, and a larger pile of coins"
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xs-12">
                  Each year, the amount of pension you have built up is
                  increased until you decide to take it, to help it keep pace
                  with inflation.
                </div>
              </div>
            </section>

            <section
              className="section__container--managing-your-benefits"
              id="managing-your-benefits"
            >
              <h3>Managing your benefits</h3>

              <p>
                You can access information about your own benefits through the{' '}
                <PortalModal />. It’s important to check in on your benefits
                from time to make sure that all your personal information is up
                to date. Knowing the value of your pension benefits will also
                help you to manage your tax situation more effectively.
              </p>
            </section>

            <section id="explanations">
              <Explanations
                openAccordionIndex={openAccordionIndex}
                setOpenAccordionIndex={setOpenAccordionIndex}
              />
            </section>
          </div>

          <div className="col-sm-1 col-xs-hidden" />
          {/* ^^^^ This is here for the spacing between the main content and the In brief stuff for... CSS reasons:) */}

          <div className="col-sm-4 col-xs-12 bring-to-top-on-mobile">
            <div className="sidebox__container--purple">
              <h3 className="sidebox__heading">In brief</h3>
              <ul className="sidebox__list">
                <li>
                  As a member of the DB Plan, you are entitled to a pension for
                  life when you stop working.
                </li>

                <li>
                  You can access information about your own benefits and make
                  changes to your personal details on the{' '}
                  <PortalModal styleName="portal-modal__button standard-link--white" />
                  .
                </li>

                <li>
                  There are limits on the amount of pension savings you can save
                  in a tax-efficient way. See{' '}
                  <a
                    data-name="in-brief__tax-limits"
                    href="#explanations"
                    onClick={() => {
                      setOpenAccordionIndex(3);
                      /** HACK magic number here - depends on the ordering of
                       * the `accordions` prop in the <Explanations /> component.
                       * Ideally, we would rewrite to use the `name` prop but
                       * time and budget constraints...*/
                    }}
                  >
                    Understand your tax limits
                  </a>{' '}
                  for more information.
                </li>
              </ul>
            </div>

            <div className="sidebox__container sidebox__container">
              <h3 className="sidebox__heading">
                Do you have benefits elsewhere?
              </h3>

              <p>
                If you were still employed by the Firm when the DB Plan closed
                to future entrants in 2008, then it’s likely you’ll also be
                building up Defined Contribution (DC) benefits. If you retained
                your DC benefits in the Plan you can find out more about these,
                as well as keep your nominated beneficiaries up to date, on the
                DC Section of the{' '}
                <PortalModal styleName="portal-modal__button standard-link" />.
              </p>

              <p>
                If your DC benefits were transferred to LifeSight, you can find
                out more information about your DC benefits, including how much
                they could be worth at retirement, on the{' '}
                <OutboundLink href={URL_LIFESIGHT}>LifeSight</OutboundLink>{' '}
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default YourBenefits;

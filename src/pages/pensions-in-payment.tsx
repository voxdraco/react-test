import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/layout';
import Banner from '../components/banner';
import Accordions from '../components/accordions';
import Tabs from '../components/Tabs';
import PortalModal from '../components/portalModal';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import GatsbyImage from 'gatsby-image';
import NominationDetailsIcon from '../images/icons/NominationDetailsIcon';
import PersonalDetailsIcon from '../images/icons/PersonalDetails';
import ViewPayslipIcon from '../images/icons/ViewPayslip';
import QuestionsIcon from '../images/icons/QuestionsIcon';
import { URL_AON_PORTAL, URL_OPEN_UNIVERSITY, URL_U3A, URL_WEA } from '../urls';

const PensionsInPayment = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      u3a: file(name: { eq: "u3a" }, sourceInstanceName: { eq: "logos" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      wea: file(name: { eq: "wea" }, sourceInstanceName: { eq: "logos" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      ou: file(name: { eq: "ou" }, sourceInstanceName: { eq: "logos" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      scamsThumbnail: file(
        name: { eq: "pensionScam" }
        sourceInstanceName: { eq: "thumbnails" }
      ) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      scamsBooklet: file(
        name: { eq: "scams-booklet" }
        sourceInstanceName: { eq: "documents" }
      ) {
        publicURL
      }
    }
  `);

  const u3aFixed = data.u3a.childImageSharp.fixed;
  const ouFixed = data.ou.childImageSharp.fixed;
  const weaFixed = data.wea.childImageSharp.fixed;
  const scamsThumbnailFixed = data.scamsThumbnail.childImageSharp.fixed;
  const scamsBookletUrl = data.scamsBooklet.publicURL;

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const [currentTabName, setCurrentTabName] = useState<string>(
    'financial-fraud'
  );

  return (
    <Layout pageName="pensions-in-payment">
      <GatsbySeo title="Pensions in payment" />
      <Banner imageName="colourCards">
        <h2 className="banner__heading">Pensions in payment</h2>
        <p className="banner__text">
          The following information is for retired members of the Plan.
        </p>
      </Banner>

      <div className="main__content">
        <div className="row">
          <div className="col-sm-7 col-xs-12">
            <section>
              <p>
                The Goldman Sachs UK Retirement Plan (the Plan) is a Defined
                Benefit (DB) arrangement in which you built up benefits before
                you stopped working. The Plan provides you with a pension, as
                well as other benefits that give you and your dependants some
                financial security in the event of your death. Your pension is
                taxed under the PAYE system and is payable for life.
              </p>

              <h3>Pension increase information </h3>

              <h4>Explaining the increases </h4>

              <p>
                Every year, your pension is reviewed to help its value keep up
                with price inflation. The amount it increases by depends on when
                you were a member of the Plan, and we write to you each year to
                let you know how much your pension will increase by in the next
                scheme year.
              </p>

              <p>
                If you were a member of the Plan before 6 April 1997, or you
                transferred in benefits from a previous employer’s scheme, you
                might also have a Guaranteed Minimum Pension (GMP) part of your
                pension. Please note, this only applies to a small proportion of
                members. As the Plan was ‘contracted out’ of the State Earnings
                Related Pension Scheme (SERPS), some members will receive
                benefits from the Plan instead of the state for that period of
                service. This is known as a GMP.
              </p>

              <p>
                If you were contracted out, the increases that you receive to
                your GMP are set out in legislation. Every year when we write to
                you about your pension increases, we also include information on
                your GMP.
              </p>

              <p>
                As you may have seen in the press, a 2018 court case (the Lloyds
                case) established that pension schemes need to adjust the
                benefits they pay to take account of a part of members’ GMP
                which was earned between 1990 and 1997 and which applies
                differently for men and women. This is referred to as “GMP
                Equalisation”. We are taking advice on what this case means for
                the Plan. However, this is likely to be a complex and lengthy
                exercise. It may therefore be many months or even years before
                this matter is fully resolved.
              </p>
              <div className="sidebox__container sidebox__container">
                <h3>Upcoming changes to the Retail Prices Index</h3>
                <p>
                  You may have heard in the media that the UK Government has
                  announced plans to make a change to the Retail Prices Index
                  (RPI). From 2030, the UK Government and the UK Statistics
                  Authority (UKSA) intend to adjust the calculation of RPI and
                  align it to the Consumer Price Index including an allowance
                  for Housing (CPIH). As CPIH has generally been lower than RPI,
                  and some of the increases the Scheme pays to some pensions in
                  payment are linked to RPI, this may have an impact on the
                  level of the increases that the Scheme pays to RPI linked
                  pensions in the future.
                </p>
              </div>
            </section>

            <section>
              <Accordions
                openAccordionIndex={openAccordionIndex}
                setOpenAccordionIndex={setOpenAccordionIndex}
                accordions={[
                  {
                    name: 'nomination-details',
                    buttonText: 'Check your nomination details',
                    icon: <NominationDetailsIcon />,
                    content: (
                      <>
                        <p>
                          Are your nomination details up to date? Your nominated
                          beneficiaries are the person(s) you have nominated to
                          receive any benefits in the event of your death. The
                          Trustees have the discretion to decide who to pay
                          these benefits to, but will consider any nominations
                          you have made. It is therefore important to check that
                          the information we hold for you is correct.
                        </p>
                        <p>
                          You can view and update your nominated beneficiaries
                          through the <PortalModal /> – once logged in, select
                          the ‘View/Update Nomination Details’ link which is
                          available through the sidebar on each page of the
                          portal.
                        </p>
                      </>
                    ),
                  },
                  {
                    name: 'personal-details',
                    buttonText: 'Change your personal details',
                    icon: <PersonalDetailsIcon />,
                    content: (
                      <>
                        <p>
                          If you’ve recently moved address or your bank details
                          have changed, it’s important to let us know. This is
                          so we can continue to process your pension payments
                          and so you can still receive important information
                          from us.
                        </p>
                        <p>
                          You can update your personal details through the{' '}
                          <PortalModal /> – once logged in, select the ‘Personal
                          details’ link in the top right corner of the page.
                        </p>
                      </>
                    ),
                  },
                  {
                    name: 'payslip',
                    buttonText: 'View your payslip',
                    icon: <ViewPayslipIcon />,
                    content: (
                      <p>
                        You can view your payslip online through the{' '}
                        <PortalModal />. Your historical payslips are available
                        month by month.
                      </p>
                    ),
                  },
                  {
                    name: 'questions',
                    buttonText: 'Still have some questions?',
                    icon: <QuestionsIcon />,
                    content: (
                      <p>
                        If you can't find the information you're looking for
                        through the website or on the{' '}
                        <PortalModal styleName="portal-modal__button" />, you
                        can contact the{' '}
                        <Link to="/contacts">Aon Pensions team</Link>.
                      </p>
                    ),
                  },
                ]}
              />

              <h3 id="help-and-advice">Help and Advice</h3>

              <Tabs
                currentTab={currentTabName}
                setCurrentTab={setCurrentTabName}
                tabs={[
                  {
                    name: 'financial-fraud',
                    title: 'Financial fraud',
                    content: (
                      <>
                        <p>
                          Unfortunately, financial scams remain commonplace,
                          despite a government ban on pension cold calling. It’s
                          important to be wary and understand what to watch out
                          for. Scammers may contact you over the phone, online
                          or in person, asking for your personal details or
                          offering free services such as a pension review or an
                          investment opportunity. Remember, your bank and other
                          legitimate organisations wouldn’t call you
                          unexpectedly. Never give out your personal or
                          financial information over the phone or online.
                        </p>
                        <p>
                          You can also find out more details about financial
                          scams by going to the{' '}
                          <OutboundLink href="https://www.fca.org.uk/scamsmart">
                            Financial Conduct Authority
                          </OutboundLink>{' '}
                          website.
                        </p>
                        <div className="thumbnail__row">
                          <div>
                            <OutboundLink
                              href={scamsBookletUrl}
                              aria-label="scams-booklet"
                            >
                              <GatsbyImage
                                fixed={scamsThumbnailFixed}
                                className="thumbnail__image"
                              />
                            </OutboundLink>
                          </div>
                          <div>
                            <p>
                              The Pension scams booklet has more information
                              about how to scam proof your pension savings.
                            </p>
                            <OutboundLink href={scamsBookletUrl}>
                              <div className="thumbnail__link">
                                Download the Pensions scams booklet
                              </div>
                            </OutboundLink>
                          </div>
                        </div>
                      </>
                    ),
                  },
                  {
                    name: 'legal-affairs',
                    title: 'Your legal affairs',
                    content: (
                      <>
                        <p>
                          Thinking about the future is not always easy, but it’s
                          a good idea to plan ahead and make sure your affairs
                          are in order.
                        </p>

                        <p>
                          Firstly, it’s important that you put together a will.
                          Not doing so could mean that your money, personal
                          belongings and property may not go to the people you
                          intended.
                        </p>

                        <p>
                          You can write a will yourself, but you may wish to get
                          help from a solicitor. You might need to seek legal
                          advice about complex matters such as Inheritance Tax
                          on your estate.
                        </p>

                        <p>
                          For more information about how to write a will visit
                          the{' '}
                          <OutboundLink href="https://gov.uk/make-will">
                            gov.uk website
                          </OutboundLink>
                          .
                        </p>
                        <p>
                          A lasting power of attorney (LPA) lets you appoint one
                          or more people to help you make decisions or to make
                          them on your behalf. These decisions could be about
                          everyday things like what to wear or when to pay a
                          bill, or more important decisions like making a will
                          and deciding where to live.
                        </p>
                        <p>
                          The role of attorney involves a great deal of
                          authority and responsibility, so think carefully about
                          who you would like to fulfil the role.
                        </p>

                        <address>
                          For more information, visit the{' '}
                          <OutboundLink href="https://gov.uk/power-of-attorney">
                            gov.uk
                          </OutboundLink>{' '}
                          website or contact the Office of the Public Guardian
                          by email at{' '}
                          <OutboundLink href="mailto:customerservices@publicguardian.gsi.gov.uk">
                            customerservices@publicguardian.gsi.gov.uk
                          </OutboundLink>{' '}
                          or telephone{' '}
                          <OutboundLink href="tel:03004560300">
                            0300 456 0300
                          </OutboundLink>
                          .
                        </address>
                      </>
                    ),
                  },
                  {
                    name: 'lifelong-learning',
                    title: 'Lifelong learning',
                    content: (
                      <>
                        <p>
                          Many retired people use the extra free time they have
                          to develop a new skill. The opportunities for further
                          learning today are excellent, so why not see if
                          there’s a course out there for you.
                        </p>

                        <p>Some useful starting points include:</p>

                        <dl className="learning__container">
                          <div className="learning__item">
                            <dt className="learning__heading">
                              <div className="row">
                                The Open University (OU)
                              </div>
                            </dt>

                            <dd>
                              <div className="thumbnail__row">
                                <OutboundLink
                                  href={URL_OPEN_UNIVERSITY}
                                  aria-label="The Open University"
                                >
                                  <GatsbyImage
                                    durationFadeIn={100}
                                    fixed={ouFixed}
                                  />
                                </OutboundLink>
                                <div>
                                  If you are interested in something specific
                                  and would like to study it in more depth, the
                                  OU might be a good option for you. The OU
                                  specialises in distance learning so you can
                                  study from home. For more information, visit
                                  the{' '}
                                  <OutboundLink href={URL_OPEN_UNIVERSITY}>
                                    OU website
                                  </OutboundLink>
                                  .
                                </div>
                              </div>
                            </dd>
                          </div>

                          <div className="learning__item">
                            <dt className="learning__heading">
                              <div className="row">
                                University of the Third Age (U3A)
                              </div>
                            </dt>

                            <dd>
                              <div className="thumbnail__row">
                                <div>
                                  <OutboundLink
                                    href={URL_U3A}
                                    aria-label="University of the Third Age"
                                  >
                                    <GatsbyImage
                                      durationFadeIn={100}
                                      fixed={u3aFixed}
                                    />
                                  </OutboundLink>
                                </div>

                                <div>
                                  The U3A is a self-help organisation for people
                                  no longer in full-time work. It provides
                                  educational, creative and leisure activities.
                                  To find out more visit the{' '}
                                  <OutboundLink href={URL_U3A}>
                                    U3A website
                                  </OutboundLink>
                                  .
                                </div>
                              </div>
                            </dd>
                          </div>

                          <div className="learning__item">
                            <dt className="learning__heading">
                              <div className="row">
                                The Workers’ Educational Association (WEA)
                              </div>
                            </dt>

                            <dd>
                              <div className="thumbnail__row">
                                <div>
                                  <OutboundLink
                                    href={URL_WEA}
                                    aria-label="Workers Educational Association"
                                  >
                                    <GatsbyImage
                                      durationFadeIn={100}
                                      fixed={weaFixed}
                                    />
                                  </OutboundLink>
                                </div>

                                <div>
                                  The WEA is the UK’s largest voluntary provider
                                  of adult education. With over 450 local
                                  branches, it offers courses on various
                                  subjects including local history, current
                                  affairs and literature. For more information,
                                  visit the{' '}
                                  <OutboundLink href={URL_WEA}>
                                    WEA website
                                  </OutboundLink>
                                  .
                                </div>
                              </div>
                            </dd>
                          </div>
                        </dl>
                      </>
                    ),
                  },
                ]}
              />
            </section>
          </div>

          <div className="col-sm-1 col-xs-hidden" />
          {/* ^^^^ This is here for the spacing between the main content and the In brief stuff for... CSS reasons:) */}

          <div className="col-sm-4 col-xs-12 bring-to-top-on-mobile">
            <div className="sidebox__container--purple">
              <section>
                <h3 className="sidebox__heading">In brief</h3>
                <ul className="sidebox__list">
                  <li>
                    As a retired member, you receive a pension from the Plan
                    which is increased each year to help it keep up with
                    inflation.
                  </li>
                  <li>
                    You can view your pension payslip, check your nominated
                    beneficiaries and update your personal details on the{' '}
                    <PortalModal styleName="portal-modal__button standard-link--white" />
                    .
                  </li>{' '}
                  <li>
                    Your pension is a valuable benefit and we want to help you
                    keep your money safe. See{' '}
                    <a
                      href="#help-and-advice"
                      onClick={() => {
                        setCurrentTabName('financial-fraud');
                      }}
                    >
                      Financial Fraud
                    </a>{' '}
                    for more details.
                  </li>
                </ul>
              </section>
            </div>

            <div className="sidebox__container sidebox__container">
              <h3 className="sidebox__heading"> Certificate of existence</h3>

              <p>
                From time to time we need to check that you are still alive and
                well, and getting the pension you are entitled to. We do it by
                sending most of our retired members a form to sign called a
                ‘Certificate of existence’.
              </p>

              <p>
                We have to send a Certificate of existence because it’s one of
                our audit requirements, and because we have a ‘duty of care’ to
                protect our members’ money and guard against fraud.
              </p>

              <p>
                This is entirely routine and there’s nothing to worry about if
                you receive one of these in the post. All you need to do is fill
                it in and send it back to us as soon as you can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PensionsInPayment;

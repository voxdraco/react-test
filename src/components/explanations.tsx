import React from 'react';
import Accordions from './accordions';
import PortalModal from './portalModal';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import GetEstimateIcon from '../images/icons/GetEstimateIcon';
import NominationDetailsIcon from '../images/icons/NominationDetailsIcon';
import UseModellerIcon from '../images/icons/UseModeller';
import TaxLimitsIcon from '../images/icons/TaxLimits';
import { URL_AON_PORTAL } from '../urls';

const Explanations = ({ openAccordionIndex, setOpenAccordionIndex }) => {
  return (
    <Accordions
      openAccordionIndex={openAccordionIndex}
      setOpenAccordionIndex={setOpenAccordionIndex}
      accordions={[
        {
          buttonText: 'Get an estimate',
          name: 'estimate',
          icon: <GetEstimateIcon />,
          content: (
            <>
              <p>
                Your DB pension is a valuable benefit for you and your family.
              </p>
              <p>
                Access your account on the <PortalModal /> to see:
              </p>
              <ul>
                <li>The value of your DB pension when you left the Plan.</li>
                <li>
                  The projected value of your DB pension at your Normal
                  Retirement Date.
                </li>
                <li>The value of DB pension payable to any dependants.</li>
              </ul>
            </>
          ),
        },
        {
          buttonText: 'Check your nomination details',
          name: 'details',
          icon: <NominationDetailsIcon />,
          content: (
            <>
              <p>
                Are your nomination details up to date? Your nominated
                beneficiaries are the person(s) you have nominated to receive
                any benefits in the event of your death. The Trustees have the
                discretion to decide who to pay these benefits to, but will
                consider any nominations you have made. It is therefore
                important to check that the information we hold for you is
                correct.
              </p>
              <p>
                You can view and update your nominated beneficiaries through
                your account on the <PortalModal /> – once logged in, select the
                ‘View/Update Nomination Details’ link which is available through
                the sidebar on each page of the portal.
              </p>
            </>
          ),
        },
        {
          buttonText: 'Use the modeller',
          name: 'modeller',
          icon: <UseModellerIcon />,
          content: (
            <>
              <p>
                Are you planning to retire earlier or later than your Normal
                Retirement Date? The retirement planning modeller provides
                estimates of the benefits you might receive at different ages.
                It also gives an estimate of the maximum amount of tax-free cash
                you may be able to take, together with the remaining pension
                payable (but does not provide you with any guarantees).
              </p>
              <p>
                You can access the modeller through the <PortalModal /> – once
                logged in, go to ‘My Modellers’ in the navigation bar.
              </p>
            </>
          ),
        },
        {
          buttonText: 'Understand the tax limits',
          name: 'tax',
          icon: <TaxLimitsIcon />,
          content: (
            <>
              <p>
                A pension is a tax-efficient way to save, but there are some
                limits.
              </p>

              <p>
                The Annual Allowance (AA) is the total amount of pension savings
                you can build up each year before you will be taxed on those
                savings. The AA applies across all of the schemes you belong to
                and is inclusive of all of the contributions that you or your
                employer pay or anyone else who pays on your behalf. The current
                limit is £40,000 but could be less if:
              </p>

              <ul>
                <li>Your adjusted income is over £240,000.</li>
                <li>You have already started to access your benefits.</li>
              </ul>

              <p>
                Where individuals have an adjusted income which exceeds
                £240,000, their annual allowance is reduced by £1 for every £2
                over the adjusted income figure (this is known as the “Tapered
                Annual Allowance”). The AA will reduce to a minimum of £4,000.
              </p>

              <p>
                If your savings exceed the AA, any unused allowance from the
                last three years can be carried forward to increase your
                allowance for the current tax year.
              </p>

              <p>
                The Lifetime Allowance (LTA) is the total value of pension
                benefits you can build up in your lifetime in a tax-efficient
                way. The current limit is £1,073,100 for the 2020/2021 tax year.
                The LTA changes annually in line with inflation.
              </p>
              <p>
                The LTA takes into account all of your UK pension benefits, so
                it’s important to keep track of any benefits built up with other
                employers or in other pension plans. You can find out how much
                of the LTA your DB pension represents in your latest benefit
                statement, which you can access on the <PortalModal />.
              </p>
              <p>
                You can find more information about both limits on the{' '}
                <OutboundLink href="https://www.gov.uk/tax-on-your-private-pension">
                  government website
                </OutboundLink>
                .
              </p>
              <p>
                If you think you may be affected by the AA or LTA, you may wish
                to contact a financial adviser. For help finding a financial
                adviser, visit the{' '}
                <OutboundLink href="https://directory.moneyadviceservice.org.uk/en">
                  Money Advice Service
                </OutboundLink>
                .
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default Explanations;

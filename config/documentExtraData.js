/** Additional info about files for the document library.
 *  If there is a file in /src/documents and it isn't mentioned here, the site build will throw an error.
 *
 * The name field is the filename MINUS THE EXTENSION
 *
 * I've followed kebab-lower-case for the filenames.
 *
 * The order of files in this array is the order they will be added to the page.
 */

module.exports = [
  {
    name: 'privacy-notice',
    headingText: 'Privacy notice',
    descriptionText:
      'This document sets out how we use the personal data we hold about you and your legal rights.',
    linkText: 'Privacy notice',
  },
  {
    name: 'scams-booklet',
    headingText: 'Pension scam booklet',
    descriptionText:
      'This booklet provides useful guidance on how to keep your pension safe.',
    linkText: 'Pension scam booklet',
  },
  {
    name: 'statement-of-investment-principles',
    headingText: 'Statement of Investment Principles (SIP)',
    descriptionText:
      'This document outlines the principles that guide the Trustee’s decisions when managing Fund investments.',
    linkText: 'Statement of Investment Principles (SIP)',
  },
  {
    name: 'summary-funding-statement',
    headingText: 'Summary Funding Statement',
    descriptionText:
      'This statement provides you with information about the latest funding position of the Plan.',
    linkText: 'Summary Funding Statement',
  },
  {
    name: 'sip-implementation-statement',
    headingText: 'SIP Implementation Statement',
    descriptionText:
      'This document details any reviews to the SIP, as well as voting behaviour over the year and the extent to which the SIP has been followed.',
    linkText: 'Implementation Statement',
  },
  {
    name: 'dc-chairs-statement',
    headingText: "DC Chair's Statement",
    descriptionText:
      'This statement has been prepared by the Trustee to demonstrate how the Plan has complied with governance standards for the period 1 January 2020 to 31 December 2020.',
    linkText: "DC Chair's Statement",
  },
];

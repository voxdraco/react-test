/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-167242863-1',
        respectDNT: true,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'banners', path: `${__dirname}/src/images/banners` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'logos', path: `${__dirname}/src/images/logos` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'thumbnails',
        path: `${__dirname}/src/images/thumbnails`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'documents', path: `${__dirname}/src/documents` },
    },
    'gatsby-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            { family: 'Roboto', variants: ['300', '400', '600', '700'] },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        titleTemplate: '%s | Goldman Sachs UK Retirement Plan',
        description:
          'Welcome to the Goldman Sachs UK Retirement Plan website, providing information and resources for deferred and pensioner members of the Defined Benefit (DB) section of the Plan.',
        language: 'en',
      },
    },
    'gatsby-plugin-optimize-svgs',
  ],
  pathPrefix: `/${process.env.PATH_PREFIX}`,
};

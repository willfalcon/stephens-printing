module.exports = {
  siteMetadata: {
    title: `Stephens Printing`,
    description: `Trust us to always deliver the right product, the right service at the right price.`
  },
  pathPrefix: 'stephensprinting/gatsby/public/',
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `n1mp5vgv`,
        dataset: `production`,
        watchMode: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stephens-printing`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        icon: `src/images/favicon.jpg`
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T4MX8J9',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' }

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      }
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://ea4070df15914b2ba4f1ba8899946eca@sentry.io/1863439',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
      }
    }
  ]
};

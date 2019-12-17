module.exports = {
  siteMetadata: {
    title: `Stephens Printing`,
    description: `Trust us to always deliver the right product, the right service at the right price.`
  },
  pathPrefix: 'stephens-printing.dev/gatsby/public/',
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `n1mp5vgv`,
        dataset: `dev`,
        watchMode: true
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
    }
  ]
};

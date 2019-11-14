module.exports = {
  siteMetadata: {
    title: `Stephens Printing`,
    description: `Trust us to always deliver the right product, the right service at the right price.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `n1mp5vgv`,
        dataset: `production`,
      },
    }`gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stephens-printing`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};

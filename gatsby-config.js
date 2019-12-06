const config = require("./config");

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/png`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cleverit XR`,
        short_name: `CXR`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/png/isologo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          config: `${__dirname}/config.js`,
          common: `${__dirname}/src/components/.common`,
          fonts: `${__dirname}/static/fonts`,
          jpg: `${__dirname}/static/jpg`,
          json: `${__dirname}/static/json`,
          models: `${__dirname}/static/models`,
          png: `${__dirname}/static/png`,
          svg: `${__dirname}/static/svg`,
          videos: `${__dirname}/static/videos`,
          scss: `${__dirname}/src/scss/`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
  ],
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const escapeStringRegexp = require("escape-string-regexp")

module.exports = {
  siteMetadata: {
    title: `モバクラ`,
    author: {
      name: `株式会社モバイルクラブ`,
      summary: `が執筆・編集・校正を行なっております。`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   // 目次用（※下記記述があると、「gatsby-remark-autolink-headers」が動かない）
          //   resolve: `gatsby-transformer-remark`,
          //   options: {
          //     tableOfContents: {
          //       heading: null,
          //       maxDepth: 6,
          //     },
          //   },
          // },
          {
            // 目次id用
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: '49',
              icon: false,
              maintainCase: true,
              elements: [`h2`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      // 検索機能用
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: "blog-catchup2",
        queries: require("./src/utils/algolia-queries"),
        settings: {
          searchableAttributes: ['body','title'],
          indexLanguages: ['ja'],
          queryLanguages: ['ja'],
          attributesToSnippet: ['body:100']
        },
      },
    },
  ],
}

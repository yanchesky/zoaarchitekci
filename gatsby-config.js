const path = require("path");
require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://zoaarchitekci.pl`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",

    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/MainLayout.js`),
      },
    },
    "gatsby-transformer-sharp",
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: false, // Enable while using `gatsby develop`
    //     tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     //ignore: ["slick-carousel"], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   },
    // },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: { src: path.resolve(__dirname, "src") },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: ["en", "fr", "pl"],
        defaultLanguage: `pl`,
        redirect: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content",
      },
      __key: "content",
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
 
          allSitePage {
            edges {
              node {
                path
                id
                isCreatedByStatefulCreatePages
                context {
                  intl {
                    language
                    languages
                    originalPath
                  }
                  locales {
                    default
                    en
                    fr
                  }
                }
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) => {
          const statefullPages = allSitePage.edges
            .filter(({ node }) => node.isCreatedByStatefulCreatePages)
            .map(({ node }) => {
              return {
                url: site.siteMetadata.siteUrl + node.path, // https://sitemaps.com/page-path
                changefreq: "monthly",
                priority: 0.5,
                links: [
                  {
                    lang: "en",
                    url: `${site.siteMetadata.siteUrl}/en${node.context.intl.originalPath}`,
                  },
                  {
                    lang: "fr",
                    url: `${site.siteMetadata.siteUrl}/fr${node.context.intl.originalPath}`,
                  },
                  {
                    lang: "pl",
                    url: `${site.siteMetadata.siteUrl}/pl${node.context.intl.originalPath}`,
                  },
                  {
                    lang: "x-default",
                    url: `${site.siteMetadata.siteUrl}/pl${node.context.intl.originalPath}`,
                  },
                ],
              };
            });

          const mdPages = allSitePage.edges
            .filter(({ node }) => !node.isCreatedByStatefulCreatePages)
            .map(({ node }) => {
              return {
                url: site.siteMetadata.siteUrl + node.path, // https://sitemaps.com/page-path
                changefreq: "monthly",
                priority: 1,
                links: [
                  {
                    lang: "en",
                    url: `${site.siteMetadata.siteUrl}/en${node.context.locales.en}`,
                  },
                  {
                    lang: "fr",
                    url: `${site.siteMetadata.siteUrl}/fr${node.context.locales.fr}`,
                  },
                  {
                    lang: "pl",
                    url: `${site.siteMetadata.siteUrl}/pl${node.context.locales.default}`,
                  },
                  {
                    lang: "x-default",
                    url: `${site.siteMetadata.siteUrl}/pl${node.context.locales.default}`,
                  },
                ],
              };
            });

          return [...statefullPages, ...mdPages];
        },
      },
    },
    "gatsby-transformer-remark",
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     prefix: `projects/`,
    //   },
    // },
  ],
};

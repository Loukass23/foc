module.exports = {
  siteMetadata: {
    title: 'Flightoclock',
    description:
      'Travel Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /assets/
              }
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `flightoclock`,
        // access_token: "IGQVJYTDFUYU92U1l2Ukc2dEhrRl84TGZADUkdpMHc2bUdsTFJ5b0luckhDOUV5RDNzTGpiaGFHM3I5bU03YVBZAU3hHS2JmQmJGTDdKeEZABcVloNGRDZAUJPYmtBZAXQzbmhhS3NUUDdhRFZAWc2Y4OS1rSgZDZD",
        // instagram_id: "245090180253026",
        // paginate: 100,
        // maxPosts: 1000,
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   // options: {
    //   //   type: `user-profile`,
    //   //   username: `flightoclock`,
    //   // },
    //   options: {
    //     username: `flightoclock`,
    //   },
    // },
    'gatsby-theme-material-ui',
    // must be after other CSS plugins
    // {
    //   resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}

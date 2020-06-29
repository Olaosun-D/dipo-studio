module.exports = {
  siteMetadata: {
    title: `Dipo Olaosun`,
    name: `Dipo Designs`,
    siteUrl: `http://dipoolaosun.co.uk`,
    description: `Designer & Developer bringing ideas to life`,
    hero: {
      heading: `Dipo Olaosun. Designer/Developer`,
      maxWidth: 652,
    },
    social: [
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/narative`,
      // },
      {
        name: `github`,
        url: `https://github.com/Olaosun-D`,
      },
      {
        name: `instagram`,
        // url: `https://www.instagram.com/d1.studios/?hl=en`,
        url: `https://www.instagram.com/deeps_worldwide/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/dipo-olaosun-5a4242138/`,
      },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dipo Olaosun Design`,
        short_name: `Dipo Olaosun`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

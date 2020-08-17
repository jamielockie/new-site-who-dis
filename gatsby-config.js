const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

console.log("jjj fullConfig", fullConfig);

module.exports = {
  siteMetadata: {
    title: `Jamie Lockie`,
    description: `A site for me people to learn about me, while I learn about the web`,
    author: `@jamielockie1`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JamieLockie`,
        short_name: `JamieLockie`,
        start_url: `/`,
        // background_color: fullConfig.theme.colors.background,
        // theme_color: fullConfig.theme.colors.primary,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};

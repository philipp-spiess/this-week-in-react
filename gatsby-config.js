module.exports = {
  siteMetadata: {
    title: 'This week in React',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'this-week-in-react',
        short_name: 'starter',
        start_url: '/',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

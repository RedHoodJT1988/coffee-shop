module.exports = {
  siteMetadata: {
    title: 'Code Together'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'src/blog'
      }
    },
    'gatsby-transformer-remark'
  ]
};

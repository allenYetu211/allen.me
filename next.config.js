const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css')
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  }
});

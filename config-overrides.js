const path = require("path")

module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        '@Assets': path.resolve(__dirname, './src/app/assets'),
        '@Components': path.resolve(__dirname, './src/app/components'),
        '@Pages': path.resolve(__dirname, './src/app/pages'),
        '@Styles': path.resolve(__dirname, './src/app/styles'),
        '@Utils': path.resolve(__dirname, './src/app/utils'),
      },
    }
  }
}
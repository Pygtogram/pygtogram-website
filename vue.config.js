const webpack = require('webpack');

module.exports = {
  configureWebpack: (_) => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'APPLICATION_VERSION':
            JSON.stringify(require('./package.json').version),
        }),
      ],
    };
  },
};

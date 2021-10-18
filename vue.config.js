const path = require('path');

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  filenameHashing: false,
  css: {
    extract: true,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    }
  },
  devServer: {
    proxy: {
      '/proxyApi': {
        target: 'http://10.255.52.38:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/proxyApi': '/'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
};

const webpack = require('webpack');

module.exports = () => ({
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    useLocalIp: true,
    host: '0.0.0.0'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

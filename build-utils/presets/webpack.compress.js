const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => ({
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        include: /\.js$/,
        uglifyOptions: {
          compress: { inline: false }
        },
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g
      })
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].min.css' })]
});

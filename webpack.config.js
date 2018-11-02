const PUBLIC_PATH = require('path').join(__dirname, 'public');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'development', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: {
        // index: './src/index.js',
        styles: './src/scss/main.scss'
      },
      output: {
        path: PUBLIC_PATH,
        filename: '[name].js'
      },
      devServer: {
        contentBase: PUBLIC_PATH
      },
      module: {
        rules: [
          {
            test: /\.(jpe?g|png|gif)$/,
            use: [{ loader: 'url-loader', options: { limit: 5000 } }]
          },
          {
            test: /\.scss/,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      }
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};

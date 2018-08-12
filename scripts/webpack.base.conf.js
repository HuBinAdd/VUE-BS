const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const vueLoaderConfig = require('./vue-loader.conf');
const { isProd, styleRule} = require('./utils');

const DIST = 'dist';
// const extractSVG = isProd;

const defaultStyleOptions = {
  loaders: [ MiniCssExtractPlugin.loader, 'css-loader'],
};

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    path: resolve(DIST),
    publicPath: './',
    filename: '[name].js',
  },
  resolve: {
    // Tell webpack to look for peer dependencies in `node_modules`
    // when packages are linked from outside directories
    modules: [resolve('node_modules')],
    extensions: ['.js', '.vue'],
    alias: {
      '#': resolve('src'),
      'util': process.env.IS_MOCK === 'true' ? resolve('src/common/util_mock') : resolve('src/common/util'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        }],
        exclude: [resolve('src/resources/icons')],
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'svg-sprite-loader',
          options: {
            // extract: extractSVG,
          },
        }],
        include: [resolve('src/resources/icons')],
      },
      // CSS modules: src/**/*.module.css
      styleRule({...defaultStyleOptions, modules: true}, {
        test: /\.module\.css$/,
        exclude: [resolve('node_modules')],
      }),
      // normal CSS files: src/**/*.css
      styleRule({}, {
        exclude: [
          /\.module\.css$/,
          resolve('node_modules'),
        ],
      }),
      // library CSS files: node_modules/**/*.css
      Object.assign(styleRule(), {
        include: [resolve('node_modules')],
      }),
    ],
  },
  plugins: [
    isProd && new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // extractSVG && new SpriteLoaderPlugin(),
  ].filter(Boolean),
};

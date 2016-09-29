'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: 
      [
        {test: /\.js$/, loader: 'babel', include: [path.resolve('./test')]},
        {test: /\.js$/, loader: 'isparta', include: [path.resolve('./src')]},
      ],
  },
  stats: {
    colors: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      'test/index.js',
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true,
      },
    },
    exclude: [],
    preprocessors: {
      'test/index.js': ['webpack'],
    },
    reporters: ['jasmine-diff', 'progress', 'coverage'],
    jasmineDiffReporter: {
      pretty: true,
      color: {
        expectedBg: '',
        expectedFg: 'red',
        actualBg: '',
        actualFg: 'green',
        defaultBg: '',
        defaultFg: 'grey'
      }
    },
    coverageReporter: {
      dir: './coverage/',
      subdir: '.',
      reporters: [
        {type: 'html'},
        {type: 'lcovonly'},
        {type: 'text', file: 'text.txt'},
        {type: 'text-summary', file: 'text-summary.txt'},
      ],
    },
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
  });
};

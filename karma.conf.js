
// Karma configuration

var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {

  config.set({

    basePath: '.',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'test/tests.js',
      {pattern: './app/bundle/common.js', nocache:true},
      {pattern: './app/bundle/app.js', nocache:true}
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/tests.js': ['webpack', 'sourcemap']
    },

    webpack: {
      resolve: webpackConfig.resolve,
      module: webpackConfig.module,
      devtool: 'inline-source-map'
    },

    webpackMiddleware: {
      noInfo: true
    },

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters : ['progress','junit'],

    junitReporter : {
      outputFile: 'karma-test-results/test-results.xml'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //    browsers: ['PhantomJS', 'Firefox', 'Chrome'],
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};

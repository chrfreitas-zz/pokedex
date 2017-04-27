module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage'
    ],
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
        'PhantomJS'
    ],
    singleRun: false
  });
};

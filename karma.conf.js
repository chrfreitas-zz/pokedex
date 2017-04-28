module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
        'lib/angular/angular.js',
        'lib/angular-mocks/angular-mocks.js',
        'lib/angular-route/angular-route.js',
        'public/js/*.js',
        'resources/assets/js/**/*.test.js'
    ],
    plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage',
        'karma-spec-reporter'
    ],
    reporters: ['spec' ,'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
        'PhantomJS'
    ],
    preprocessors: {
        'resources/assets/js/**/*.js': ['coverage']
    },
    coverageReporter: {
        type: 'html',
        dir: 'coverage'
    },
    singleRun: false

  });
};

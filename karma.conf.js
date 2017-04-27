module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
        'node_modules/angular/angular.js',
        'public/js/*.js',
        'resources/assets/js/module/**/*.test.js'
    ],

    exclude: [

    ],

    preprocessors: {

    },

    reporters: ['spec'],

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

//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            'testing.js'
        ],

        webpack:require('./webpack.config.js'),

        webpackMiddleware: {
            noInfo:false
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-webpack',
            'karma-sourcemap-loader'
        ],

        preprocessors:{
            'testing.js':['webpack','sourcemap']
        },


        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};

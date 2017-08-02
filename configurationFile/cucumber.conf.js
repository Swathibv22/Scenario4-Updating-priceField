
exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },
    chromeOnly: true,
    directConnect: true,
    // Spec patterns are relative to this directory.
    specs: [
        '../featureFile/*.feature'
    ],

    baseURL: 'https://crs.axisrooms.com/',

    cucumberOpts: {
        require: '../stepDefinitions/definingSteps.js',
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    }
};

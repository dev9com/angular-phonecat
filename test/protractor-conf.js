exports.config = {
  allScriptsTimeout: 11000,

  specs: [
      // 'e2e/*.js'
      'e2e/spec/*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

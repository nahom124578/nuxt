module.exports = {
  // default folder where screenshots are saved
  screenshotsFolder: "cypress/screenshots",

  // enables video recording during tests
  video: true,

  // automatically take screenshots on test failure
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000", // add baseUrl for localhost
  },
};

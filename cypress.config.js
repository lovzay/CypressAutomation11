const { defineConfig } = require('cypress');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

  
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  projectId: "196gn7",
  retries: {
    runMode: 1,
  },
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    "chromeWebSecurity": false,
    "modifyObstructiveCode": true,
    "experimentalSourceRewriting":true,
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    },
  defaultCommandTimeout: 6000,
  
  reporter: 'mochawesome'
  })

  
  



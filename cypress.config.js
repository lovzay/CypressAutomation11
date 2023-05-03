const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "196gn7",
  retries: {
    runMode: 1,
  },
  e2e: {
    "modifyObstructiveCode": true,
    "experimentalSourceRewriting":true,
    "experimentalSessionAndOrigin":true,
    env: {
      url: "https://rahulshettyacademy.com"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 6000,
    specPattern: 'cypress/integration/examples/*.js'
  },

})




import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     specPattern: 'cypress/e2e/**/*.cy.js',
//     baseUrl: 'https://www.saucedemo.com', // or whatever you're testing
//   },
// });

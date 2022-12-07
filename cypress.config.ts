import { defineConfig } from 'cypress'

export default defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    DSPACE_TEST_ADMIN_USER: 'dspacedemo+admin@gmail.com',
    DSPACE_TEST_ADMIN_PASSWORD: 'dspace',
    DSPACE_TEST_COMMUNITY: '0958c910-2037-42a9-81c7-dca80e3892b4',
    DSPACE_TEST_COLLECTION: '282164f5-d325-4740-8dd1-fa4d6d3e7200',
    DSPACE_TEST_ENTITY_PUBLICATION: 'e98b0f27-5c19-49a0-960d-eb6ad5287067',
    DSPACE_TEST_SEARCH_TERM: 'test',
    DSPACE_TEST_SUBMIT_COLLECTION_NAME: 'Sample Collection',
    DSPACE_TEST_SUBMIT_COLLECTION_UUID: '9d8334e9-25d3-4a67-9cea-3dffdef80144',
    DSPACE_TEST_SUBMIT_USER: 'dspacedemo+submit@gmail.com',
    DSPACE_TEST_SUBMIT_USER_PASSWORD: 'dspace',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:4000',
  },
})

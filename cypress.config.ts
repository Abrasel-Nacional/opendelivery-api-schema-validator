import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  env: {
    baseUrl: 'https://gui-camargo.github.io/opendelivery-api-schema-validator/',
  },
});

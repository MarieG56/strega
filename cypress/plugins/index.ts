import { defineConfig } from 'cypress';
import { devServer } from '@cypress/vite-dev-server';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('dev-server:start', (options) => devServer({ ...options }));
      return config;
    },
  },
});

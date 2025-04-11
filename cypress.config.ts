import { defineConfig } from 'cypress'
import { devServer } from '@cypress/vite-dev-server'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const vitePlugin = require('@cypress/vite-dev-server').vitePlugin;
      on('file:preprocessor', vitePlugin());
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/test/**/*.cy.{js,jsx,ts,tsx}',
  },
})

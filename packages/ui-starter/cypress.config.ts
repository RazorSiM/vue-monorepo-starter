import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    screenshotOnRunFailure: false,
    video: false,
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})

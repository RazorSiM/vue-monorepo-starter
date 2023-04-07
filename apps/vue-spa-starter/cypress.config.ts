import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    video: false,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },

  component: {
    screenshotOnRunFailure: false,
    video: false,
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});

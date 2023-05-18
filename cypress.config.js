import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    supportFile: false,
    browser: "chrome",
    specPattern: "**/*.spec.js",
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/cypress-[hash].xml",
      toConsole: true,
    },
  },
})



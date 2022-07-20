const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  video: false,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

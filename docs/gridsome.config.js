const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const purgecss = new PurgecssPlugin({
  paths: glob.sync(`./src/**/*.vue`)
});

module.exports = {
  siteName: "Particles CSS",
  plugins: [],
  configureWebpack: {
    plugins: [...(process.env.NODE_ENV === "production" ? [purgecss] : [])]
  }
};

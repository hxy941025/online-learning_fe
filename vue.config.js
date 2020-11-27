const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    before: require("./mock/mock-server.js"),
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        "@": resolve("src"),
        "@c": resolve("src/components"),
        views: resolve("src/views"),
        api: resolve("src/api"),
      },
    },
  },
};

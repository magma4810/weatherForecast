const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://127.0.0.1:8080/",
      notify: true, // disable the BrowserSync notification
      template: "src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./src"),
    },
    compress: true,
    port: 8080,
  },
};

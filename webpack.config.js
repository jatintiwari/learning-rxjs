const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname)
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [".js"],
  },
  context: __dirname,
  target: "web",
}

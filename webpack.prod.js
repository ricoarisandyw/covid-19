const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //dipasang via npm

module.exports = {
  mode: "production",
  devtool: "eval",
  cache: true,
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};

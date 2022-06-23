/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-06-23 17:00:11
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-23 18:01:37
 */
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [],
  devServer: {
    static: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
    ],
  },
};

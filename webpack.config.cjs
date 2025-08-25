const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/mainScript.js", // точка входа
  output: {
    filename: "bundle.js", // имя итогового файла
    path: path.resolve(__dirname, "build"), // папка для сборки
    clean: true, // очищать папку built перед сборкой
  },
  mode: "development", // режим: development или production
  resolve: {
    alias: {
      "@mathFunctions": path.resolve(__dirname, "src/modules/MathFunctions"),
      "@constants": path.resolve(__dirname, "src/modules/CONSTANTS/CONSTANTS.js"), // путь к папке или файлу
    },
    extensions: [".js", ".jsx", ".json"], // расширения, которые Webpack будет подставлять автоматически
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // любые файлы, которые заканчиваются на .css
        use: ["style-loader", "css-loader"], // применяем сначала css-loader, затем style-loader
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // исходный шаблон
      filename: "index.html", // выходной файл
    }),
  ],
};

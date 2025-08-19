const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/mainScript.js", // точка входа
  output: {
    filename: "bundle.js", // имя итогового файла
    path: path.resolve(__dirname, "built"), // папка для сборки
    clean: true, // очищать папку built перед сборкой
  },
  mode: "development", // режим: development или production
  resolve: {
    alias: {
      "@math": path.resolve(__dirname, "src/modules"), // путь к папке или файлу
      "@main": path.resolve(__dirname, "src/modules/MathFunctions/mainCommand"),
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

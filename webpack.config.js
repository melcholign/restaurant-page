const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        watchFiles: ["./src/index.html"],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    optimization: {
        runtimeChunk: "single",
    },
}
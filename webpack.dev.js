const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
        ] 
    },
    plugins: [
        new Dotenv({
            path: './dev.env'
        })
    ],
    stats: "errors-only",
    devtool: 'eval-source-map',// To be able to put breakpoints in ts files
    devServer: {
        port: 8080
    }
});
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, './src'),
    resolve: {
        extensions: ['.js', '.jsx', '.tsx']
    },
    entry: {
        app: './index.tsx',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of the file in ./dist/
            template: './index.html', //Name of template in root folder
            scriptLoading: 'blocking', //Use blocking approach as script loading mode, for compatibility with old browsers
        }),
        new CleanWebpackPlugin()
    ]
};
   
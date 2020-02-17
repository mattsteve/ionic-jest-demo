const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        stats: "errors-only",
        host: process.env.HOST, // default: localhost
        port: process.env.PORT, // default: 8080
        open: true, // open page in browser
        overlay: true, // error overlay
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Project Name"
        })
    ]
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '开发环境'
        })
    ],
    output: {
        filename: '[name].boundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },

};
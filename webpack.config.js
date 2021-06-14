const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ],
    output: {
        filename: '[name].boundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

};
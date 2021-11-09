/* global require module */

const sourceDir = 'src';

const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const html = new HtmlWebpackPlugin({
    template: `${sourceDir}/index.ejs`,
    filename: 'index.html',
    chunks: ['app']
});

module.exports = WebpackMerge(
    commonConfig,
    {
        devtool: 'inline-source-map',
        plugins: [
            html
        ]
    }
);

/* global require module */

const sourceDir = 'src';

const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const html = new HtmlWebpackPlugin({
    template: `${sourceDir}/index.ejs`,
    filename: 'index.html',
    chunks: ['app'],
    hash: true
});

module.exports = WebpackMerge(
    commonConfig,
    {
        mode: 'production',
        plugins: [
            html
        ]
    }
);

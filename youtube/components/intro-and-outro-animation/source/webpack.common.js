/* global require module __dirname */

const sourceDir = 'src';
const outputDir = 'public';

const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const clean = new CleanWebpackPlugin([outputDir]);
const extractCSS = new ExtractTextPlugin('styles/styles.css');
const optimizeCSS = new OptimizeCssAssetsPlugin();

module.exports = {
    mode: 'development',
    entry: {
        app: `./${sourceDir}/scripts/index.js`
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: '../'
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        publicPath: '../'
                    }
                }
            },
            {
                test: /\.(less|css)$/,
                use: ['extracted-loader'].concat(extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                }))
            },
            {
                test: /.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        clean,
        extractCSS,
        optimizeCSS
    ],
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, outputDir),
        publicPath: ''
    }
};

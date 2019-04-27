const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {

    context: path.join(process.cwd(), 'src'),

    devtool: 'source-map',

    entry: ['@babel/polyfill', './scripts/app.js'],

    output: {
        path: path.join(process.cwd(), 'public'),
        filename: 'app.js',
        publicPath: './',
        sourceMapFilename: '[name].map'
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: [path.join(process.cwd(), 'src'), 'node_modules']
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {

                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["last 2 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        },
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|otf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin(['public'], { root: process.cwd() }),
        new CopyWebpackPlugin([{
            from: './assets/',
            to: './assets/',
        },
        {
            from: './other/',
            to: './',
        }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],
            runtimeCaching: [{
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                handler: 'CacheFirst',

                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 10,
                    },
                },
            }],
        }),
        // new HtmlWebpackPlugin({
        //     template: '404.html'
        // })
    ]
};
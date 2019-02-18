const webpack = require('webpack');
const Merge = require('webpack-merge');
const MainConfig = require('./webpack.main.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = Merge(MainConfig, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 7,
                },
            }),
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});
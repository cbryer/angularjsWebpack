const path = require('path');
const PACKAGE = require(path.join(__dirname,'package.json'));
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name:PACKAGE.name,
    context: path.resolve(__dirname),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot:true,
        inline:true,
        compress:true,
        open: 'chrome',
    },
    entry: {
        'app': './app/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'framework'),
        library: 'framework',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            FW_VERSION: JSON.stringify(PACKAGE.version)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './app/index.ejs',
            hash: true,
            chunks: [
                'app',
            ],
            chunksSortMode:'manual'
        }),
        new CleanWebpackPlugin(path.join(__dirname,'dist')),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'window.$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src', ':ng-src']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            name:"[name].[ext]?[hash]",
                            // public path needs to be lib/framework/dist for images in html, needs to be img/*.* for css...
                            publicPath: 'framework/',
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[ext]?[hash]",
                            outputPath: 'fonts/',
                            publicPath: 'framework/'
                        }
                    }
                ]
            }
        ]
    }
};
/**
 * Created by zhaofeng on 16/5/18.
 */
var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        home: [
            path.resolve(__dirname, 'app/home/index.js')
        ],
        description: [
            path.resolve(__dirname, 'app/description/index.js')
        ],
        course: [
            path.resolve(__dirname, 'app/course/index.js')
        ],
        honor: [
            path.resolve(__dirname, 'app/honor/index.js')
        ],
        device: [
            path.resolve(__dirname, 'app/device/index.js')
        ],
        contact: [
            path.resolve(__dirname, 'app/contact/index.js')
        ],
        location: [
            path.resolve(__dirname, 'app/location/index.js')
        ],
        lib: ['vue']
    },
    output: {
        path: path.resolve(__dirname, 'build/static'),
        publicPath: "http://127.0.0.1:3000/static/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                // make sure to exclude 3rd party code in node_modules
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(less|css)$/,
                loader: "style!css!less"
            },
            {
                test: /\.(jpg|png|svg|woff2|woff|eot|ttf)$/,
                loader: "url?limit=8192"
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })

    ],
    vue: {
        loaders: {
            js: 'babel'
        }
    }
};

module.exports = config;
var path = require('path');
var webpack = require("webpack");
//var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

/*if (process.env.npm_package_config_env === 'PROD' || process.env.npm_package_config_env === 'TEST') {
 activePlugins.push(new ngAnnotatePlugin({}));
 activePlugins.push(new webpack.optimize.UglifyJsPlugin({
 compress: {
 warnings: false,
 }
 }));
 }*/

module.exports = {
    entry: {
        app: "./app/js/app.es6"
    },
    output: {
        path: path.join(__dirname, 'app'),
        publicPath: '/',
        filename: 'bundle/app.js' // name wird mit key aus entry-objekt oben ersetzt

    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.es6$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/i,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf\?*$|\.eot|\.obj$/i,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'

            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }

        ]
    },
    devServer: {
        noInfo: false
    },
    plugins: [
        new webpack.ProvidePlugin({
            IBAN: "iban"
        }),
        new webpack.ProvidePlugin({
            moment: "moment"
        }),
        new webpack.optimize.CommonsChunkPlugin({filename: "bundle/common.js"})
    ]
    ,
    resolve: {
        extensions: ['', '.js', '.es6']
    }
}

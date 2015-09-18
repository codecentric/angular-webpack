var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./app/app.es6"
    },
    output: {
        path: path.join(__dirname, 'app'),
        publicPath: '/',
        filename: 'bundle/app.js' // name wird mit key aus entry-objekt oben ersetzt

    },
    devtool: 'inline-source-map',
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
                loader: 'url-loader?limit=90000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=90000&mimetype=application/font-woff'

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

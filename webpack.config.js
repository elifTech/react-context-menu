var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle: './index.jsx'
    },
    output: {
        path: path.join(__dirname, "public/js"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
        // new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'stage-0', 'es2015']
                }
            }
        ]
    }
};

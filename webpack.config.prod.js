const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'babel-polyfill',
            './src/index'
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, '/src')
            }
        ]
    }
};
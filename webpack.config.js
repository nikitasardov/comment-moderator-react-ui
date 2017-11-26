var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './js/app.jsx',
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    },

    module: {
        /*        rules: [
         {
         enforce: 'pre',
         test: /\.jsx$/,
         exclude: /node_modules/,
         loaders: ['eslint'],
         include: [
         path.resolve(__dirname, "src"),
         ],
         }
         ],*/
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react', 'env'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },

    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};

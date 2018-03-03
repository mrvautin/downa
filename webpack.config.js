const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const clientConfig = {
    entry: './index.js',
    target: 'web', // <=== can be omitted as default is 'web'
    output: {
        library: 'downa',
        path: path.resolve(__dirname, 'dist'),
        filename: 'downa.min.js'
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = clientConfig;

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const clientConfig = {
    mode: 'development',
    entry: './index.js',
    output: {
        library: 'downa',
        path: path.resolve(__dirname, 'dist'),
        filename: 'downa.min.js'
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};

module.exports = clientConfig;

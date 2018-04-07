'use strict';
const webpack = require('webpack');
const path = require('path')
const config = require("./gulp-tasks/config");

// режим разработки?
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'dev'; // trim для удаления лишних пробелов, если платформа Windows

module.exports = {
    context: path.join(__dirname, config.path.scripts),
    entry: {
        scripts: path.join(__dirname, config.path.scripts, 'app.js')
    },
    output: {
        path: path.join(__dirname, config.path.dist.scripts),
        filename: '[name].js',
        library: 'app',
        pathinfo: true
    },
    resolve: {
        alias: {
            '$': 'jquery',
            'jQuery': 'jquery',
            'jquery': 'jquery',
        },
        module: {
            
        }
        // modules: ['node_modules'],
        extensions: [".js", ".json", ".jsx", ".css"],
    }
};

if (NODE_ENV == 'dev') {
    module.exports.devtool = 'eval';
}
if (NODE_ENV == 'prod') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ // minifying scripts
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: false
            }
        })
    );
}

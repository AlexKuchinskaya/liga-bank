const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
    entry: [`./src/index.js`],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                },
            },

            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                  loader: 'url-loader',
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
        ],
    },
    // plugins: [
    //     new SVGSpritemapPlugin()
    // ],
    devServer: { 
        contentBase: './public',
        historyApiFallback: {
            index: 'index.html'
          },
        port: 7700,
        open: true
    } ,
    devtool: 'source-map',
};
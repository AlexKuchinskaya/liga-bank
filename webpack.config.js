const webpack = require('webpack');
const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

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
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-inline-loader'
            // },
            // {
            //     test: /\.svg$/,
            //     include: path.resolve(__dirname, '/public/img/icons'),
            //     use: [
            //       {
            //         loader: 'svg-sprite-loader',
            //         options: {
            //               extract: true,
            //               spriteFilename: './public/img/icons.svg',
            //             }
            //       },
            //     ],
            // }
            {
              test: /\.svg$/,
              use: [
                { loader: 'svg-sprite-loader',  },
                
              ]
            }

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
    },
    plugins: [
      new SpriteLoaderPlugin()
    ],
    devtool: 'source-map',
};
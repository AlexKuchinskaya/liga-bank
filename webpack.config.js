const webpack = require('webpack');
const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: [`./src/index.js`],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
          // {
          //   test: /icon\/.*\.svg$/,
          //   use: [
          //     { 
          //        loader: 'svg-sprite-loader',
          //        options: {
          //           extract: true,
          //           // spriteFilename: './public/img/icons.svg',
          //         }
          //     },
              
          //   ]
          // },
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
            
            // {
            //     test: /\.(woff|woff2)$/,
            //     use: {
            //       loader: 'url-loader',
            //     },
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            
            {
                test: /\.(woff|woff2|svg)$/,
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

        ],
    },
    // plugins: [
    //     new SVGSpritemapPlugin()
    // ],

    // devServer: { 
    //     contentBase: './public',
    //     historyApiFallback: {
    //         index: 'index.html'
    //       },
    //     port: 7700,
    //     open: true
    // },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      open: true,
      port: 1337,
      historyApiFallback: true,
  },
    plugins: [
      new SpriteLoaderPlugin()
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
const path = require(`path`);

module.exports = {
  entry: [`./src/index.js`],
  output: {
    path: path.resolve(__dirname, `public`),
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },

      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: `style-loader`
        }, {
          loader: `css-loader`
        },
        {
          loader: `sass-loader`
        }]
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: `file-loader`,
          },
        ],
      },

      {
        test: /\.(woff|woff2|svg)$/,
        use: [
          {
            loader: `svg-url-loader`,
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`,
};

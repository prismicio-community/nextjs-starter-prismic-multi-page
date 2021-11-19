const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx?|css)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../'),
        use: [
          {
            loader: require('styled-jsx/webpack').loader,
          },
        ],
      },
    ],
  },
};
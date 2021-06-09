/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@rsn/components'])
module.exports = withTM({
  webpack: config => {
    config.module.rules.push({
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      use: [
        {
          loader: 'elm-hot-webpack-loader',
          options: {},
        },
        {
          loader: 'elm-webpack-loader',
          options: {},
        },
      ],
    })

    return config
  },
})

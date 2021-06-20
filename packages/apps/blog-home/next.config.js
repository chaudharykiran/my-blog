/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@rsn/components'])
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})
module.exports = withTM(
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    webpack: (config, { isServer }) => {
      // console.log({ config });
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = { fs: 'empty' }
      }
      return config
    },
  }),
)

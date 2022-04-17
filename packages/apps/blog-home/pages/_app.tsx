import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'

import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp = (props: any) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <MDXProvider components={{}}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    </CacheProvider>
  )
}

export default MyApp

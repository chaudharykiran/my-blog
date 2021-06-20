import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'

import theme from '../src/theme'

const MyApp = (props: any) => {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <MDXProvider components={{}}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box margin={4}>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </MDXProvider>
    </>
  )
}

export default MyApp

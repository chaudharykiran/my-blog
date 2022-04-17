import React from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

interface ArticleLayoutProps {
  children: React.ReactNode
}
function ArticleLayout(props: ArticleLayoutProps) {
  const { children } = props

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Button variant="outlined" href="/">
          All Articles
        </Button>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  )
}

export default ArticleLayout

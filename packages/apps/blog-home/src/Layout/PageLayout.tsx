import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import LeftSideNavigation from '../LeftNavigation/LeftNavigation'

interface Props {
  children: React.ReactNode
}

function PageLayout(props: Props) {
  const { children } = props

  return (
    <Box pt={2}>
      <Grid container spacing={4}>
        <Grid item>
          <LeftSideNavigation />
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  )
}

export default PageLayout

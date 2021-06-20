import React from 'react'

import Grid from '@material-ui/core/Grid'
import LeftSideNavigation from '../LeftNavigation/LeftNavigation'

interface Props {
  children: React.ReactNode
}

function PageLayout(props: Props) {
  const { children } = props

  return (
    <Grid container spacing={4}>
      <Grid item>
        <LeftSideNavigation />
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  )
}

export default PageLayout

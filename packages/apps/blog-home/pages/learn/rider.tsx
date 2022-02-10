import React from 'react'

import Container from '@material-ui/core/Container'

import Box from '@blog/components/src/Box/Box'

import HeaderAvatar from './headerAvatar'
import SummaryDetail from './summaryDetail'
import VehicleDetail from './vehicleDetail'
import Review from './review'

// headerAvatar
// summary details
// vehicle details
// reviews
export default function RiderDetail() {
  return (
    <Container maxWidth="xs">
      <Box py="16px" display="felx" flexDirection="column">
        <HeaderAvatar />
        <SummaryDetail />
        <VehicleDetail />
        <Review />
      </Box>
    </Container>
  )
}

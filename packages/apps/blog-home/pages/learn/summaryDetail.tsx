import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

export default function SummaryDetail() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column">
        <Typography>
          <Box fontWeight="fontWeightBold">Arrival</Box>
        </Typography>
        <Typography>2 mins</Typography>
      </Box>
      <Divider flexItem orientation="vertical" />
      <Box display="flex" flexDirection="column">
        <Typography>
          <Box fontWeight="fontWeightBold">Drop off</Box>
        </Typography>
        <Typography>8:07 pm</Typography>
      </Box>
      <Divider flexItem orientation="vertical" />
      <Box display="flex" flexDirection="column">
        <Typography>
          <Box fontWeight="fontWeightBold">Capacity</Box>
        </Typography>
        <Typography>2/4</Typography>
      </Box>
    </Box>
  )
}

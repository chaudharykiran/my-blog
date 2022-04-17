// @ts-nocheck

import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@blog/components/src/Box/Box'

function VehicleDetail() {
  return (
    <Box display="flex" flexDirection="column">
      <Typography>
        <Box fontWeight="fontWeightBold" component="span">
          Car Details
        </Box>
      </Typography>

      <Box display="flex">
        <Box flex="1 60%">
          <img width="100%" src="/static/images/car.png" alt="Vehicle" />
        </Box>
        <Box display="flex" flexDirection="column" flex="1 40%" gap={1}>
          <Box>
            <Typography>
              <Box fontWeight="fontWeightBold">Booking Price</Box>
            </Typography>
            <Typography>NRs 50</Typography>
          </Box>
          <Box>
            <Typography>
              <Box fontWeight="fontWeightBold">Brand</Box>
            </Typography>
            <Typography>Tata Indica</Typography>
          </Box>
          <Box>
            <Typography>
              <Box fontWeight="fontWeightBold">Plate Number</Box>
            </Typography>
            <Typography>HP 29 A356</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default VehicleDetail

import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import PersonAvatar from './personAvatar'

export default function HeaderAvatar() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <ExpandMoreIcon />
      <Box my={2}>
        <Box display="flex" alignItems="center">
          <ArrowBackIcon />
          <Box marginX={4}>
            <PersonAvatar />
          </Box>
          <ArrowForwardIcon />
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold">Kiran Kumar Chaudhary</Box>
        </Typography>
      </Box>
    </Box>
  )
}

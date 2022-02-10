import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

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

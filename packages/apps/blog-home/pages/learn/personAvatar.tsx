import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  chip: {
    padding: `${theme.typography.pxToRem(theme.spacing(1))} ${theme.typography.pxToRem(theme.spacing(1.5))}`,
  },
}))

function PersonAvatar() {
  const classes = useStyles()

  return (
    <Box position="relative">
      <Avatar className={classes.large} src="/static/images/avatar.jpeg" />
      <Box display="flex" position="absolute" bottom={0}>
        <Chip size="small" className={classes.chip} icon={<StarIcon />} label="4.7" color="primary" />
      </Box>
    </Box>
  )
}

export default PersonAvatar

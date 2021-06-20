import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import TwitterIcon from '@material-ui/icons/Twitter'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

function LeftNavigation() {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column" pt={2} pb={2}>
        <Link href="/">
          <Avatar className={classes.large} alt="Kiran Kumar Chaudhary" src="/static/images/avatar.jpeg" />
        </Link>
        <Typography variant="h6">Kiran Kumar Chaudhary</Typography>
        <Typography variant="subtitle1">
          <Box fontWeight="fontWeightMedium">Code. Learn. Share</Box>
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box py={1}>
          <Link href="/">
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightRegular">Articles</Box>
            </Typography>
          </Link>
        </Box>
        <Box pb={1}>
          <Link href="/about">
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightRegular">About me</Box>
            </Typography>
          </Link>
        </Box>
        <Box pb={1}>
          <Link href="/my-work">
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightRegular">My works</Box>
            </Typography>
          </Link>
        </Box>
        <Box pb={1}>
          <Link href="/contact">
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightRegular">Contact me </Box>
            </Typography>
          </Link>
        </Box>
        <Box pb={1} display="flex" justifyContent="space-between">
          <Link href="#">
            <GitHubIcon />
          </Link>
          <Link href="#">
            <EmailIcon />
          </Link>
          <Link href="#">
            <TwitterIcon />
          </Link>
        </Box>
      </Box>
      <Typography variant="inherit">© All rights reserved.</Typography>
    </Box>
  )
}

export default LeftNavigation

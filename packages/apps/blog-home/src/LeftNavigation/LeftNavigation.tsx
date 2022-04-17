import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'

function LeftNavigation() {
  const theme = useTheme()

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column" pb={2}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Link href="/">
            <Avatar
              sx={{
                width: theme.spacing(10),
                height: theme.spacing(10),
              }}
              alt="Kiran Kumar Chaudhary"
              src="/static/images/avatar.jpeg"
            />
          </Link>
        </Box>
        <Typography variant="body1">
          <Box fontWeight="fontWeightBold">Kiran Kumar Chaudhary</Box>
        </Typography>
        <Typography variant="subtitle1">
          <Box fontWeight="fontWeightMedium" color="text.secondary">
            Code. Learn. Share
          </Box>
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
        <Box pb={1} display="flex">
          <Box mr={1}>
            <Link href="#">
              <GitHubIcon />
            </Link>
          </Box>
          <Box mr={1}>
            <Link href="#">
              <EmailIcon />
            </Link>
          </Box>
          <Box>
            <Link href="#">
              <TwitterIcon />
            </Link>
          </Box>
        </Box>
      </Box>
      <Typography variant="inherit">
        <Box color="text.secondary" fontSize="small">
          © All rights reserved.
        </Box>
      </Typography>
    </Box>
  )
}

export default LeftNavigation

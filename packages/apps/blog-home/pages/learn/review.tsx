import React from 'react'

import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'

import Box from '@blog/components/src/Box/Box'

const reviewList = [
  {
    message: 'excellent and professional drive. Knows his job well and do it with utmost sincerity.I love the Rider.',
    reviewer: 'Kiran Kumar Chaudhary',
    rate: '4.9',
    location: 'Secunderabad',
    datetime: 'Fri Feb 16 2018',
  },
  {
    message: 'excellent and professional drive. Knows his job well and do it with utmost sincerity.I love the Rider.',
    reviewer: 'Kiran Kumar Chaudhary',
    rate: '4.9',
    location: 'Secunderabad',
    datetime: 'Fri Feb 16 2018',
  },
]

interface ReviewProps {
  review: {
    message: string
    reviewer: string
    rate: string
    location: string
    datetime: string
  }
}
function Review(props: ReviewProps) {
  const { review } = props

  return (
    <>
      <Box pb={1}>
        <Typography variant="body1">{review.message}</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="/static/images/avatar.jpeg" />
          <Box>
            <Typography>
              <Box fontWeight="fontWeightBold" component="span">
                {review.reviewer}
              </Box>
            </Typography>
            <Typography>{`${review.location} ${review.datetime}`}</Typography>
          </Box>
        </Box>
        <Box>
          <Chip size="medium" label={review.rate} color="primary" />
        </Box>
      </Box>
    </>
  )
}

function ReviewList() {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box>
        <Typography component="span" variant="h4">
          Reviews
        </Typography>
        <Typography component="span" variant="h6">
          (100 trips, 80 reviews)
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap={2}>
        {reviewList.map((review, index) => {
          return (
            <Box key={index}>
              <Review review={review} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default ReviewList

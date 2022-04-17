import React from 'react'
import MDX from '@mdx-js/runtime'

import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import PageLayout from 'src/Layout/PageLayout'
import { getPostSlugs } from 'src/utils/getLatestContent'

function Home(props: any) {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
  const { posts } = props

  return (
    <Container maxWidth={isLargeScreen ? 'md' : 'sm'}>
      <PageLayout>
        {posts.map(post => (
          <React.Fragment key={post.slug}>
            <Typography variant="subtitle1">
              <Link href={`/posts/${post.slug}`}>
                <Box fontWeight="fontWeightRegular">{post.data.title}</Box>
              </Link>
            </Typography>
            <MDX>{post.content}</MDX>
          </React.Fragment>
        ))}
      </PageLayout>
    </Container>
  )
}

export async function getStaticProps(context) {
  const allPosts = getPostSlugs()
  return {
    props: {
      posts: allPosts.map(post => ({
        ...post,
      })),
    },
  }
}

export default Home

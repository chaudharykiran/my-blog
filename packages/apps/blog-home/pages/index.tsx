import React from 'react'
import MDX from '@mdx-js/runtime'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

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
          <div key={post.slug}>
            <Typography variant="subtitle1">
              <Link href={`/posts/${post.slug}`}>
                <Box fontWeight="fontWeightRegular">{post.data.title}</Box>
              </Link>
            </Typography>
            <MDX>{post.content}</MDX>
          </div>
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

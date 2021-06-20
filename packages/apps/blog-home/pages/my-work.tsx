import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MDX from '@mdx-js/runtime'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import PageLayout from 'src/Layout/PageLayout'

function MyWork(props: any) {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Container maxWidth={isLargeScreen ? 'md' : 'sm'}>
      <PageLayout>
        <Typography variant="h3">My Works</Typography>

        <MDX>{props.content}</MDX>
      </PageLayout>
    </Container>
  )
}

export async function getStaticProps() {
  const aboutMeContent = fs.readFileSync(path.join(process.cwd(), 'src', '_mdxPages', 'myWork.mdx'), 'utf8')
  const { content } = matter(aboutMeContent)
  return {
    props: {
      content,
    },
  }
}

export default MyWork

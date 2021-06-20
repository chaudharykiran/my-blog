import React from 'react'
import { getPostSlugs } from 'src/utils/getLatestContent'
import MDX from '@mdx-js/runtime'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import ArticleLayout from 'src/Layout/ArticleLayout'

function Article(props) {
  const { content } = props

  return (
    <Container maxWidth="md">
      <ArticleLayout>
        <Typography variant="h4">{props.data.title}</Typography>
        <MDX>{content}</MDX>
      </ArticleLayout>
    </Container>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const allPosts = getPostSlugs()
  const post = allPosts.find(post => post.slug === params.slug)

  return {
    props: {
      ...post,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = getPostSlugs()
  return {
    paths: allPosts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export default Article

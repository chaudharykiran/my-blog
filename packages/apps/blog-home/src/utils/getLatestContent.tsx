import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function getLatestContent() {
  const directory = process.cwd() + '/pages/posts/'
  const allPostFiles = fs.readdirSync(directory)
  const postList = allPostFiles
    .map(fileName => {
      const file = fs.readFileSync(`${directory}/${fileName}`, 'utf8')
      const { data, content } = matter(file)

      return {
        data,
        content,
      }
    })
    .filter(post => !!post.data.isPublished)
  return postList
}

export function getPostSlugs() {
  const contentDirctory = path.join(process.cwd(), 'src', '_contents')
  const allPosts = fs.readdirSync(contentDirctory)

  return allPosts.map(fileName => {
    const slug = fileName.replace('.mdx', '')
    const fileContents = fs.readFileSync(path.join(contentDirctory, fileName), 'utf8')

    const { data, content } = matter(fileContents)

    return {
      data,
      content,
      slug,
    }
  })
}

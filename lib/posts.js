import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')
const { defaultLocale } = require('../i18n/config')

function getFilePath(id, locale) {
  const fileName = locale === defaultLocale ? `index.md` : `index.${locale}.md`
  return path.join(postsDirectory, id, fileName)
}

// Collects information from posts files and sorts them by date.
export function getSortedPostsData(locale) {
  // Get directory names as posts IDs under /posts folder.
  const postIDs = fs.readdirSync(postsDirectory)

  const allPostsData = postIDs
    .map(id => {
      // Get file according to the given locale.
      const filePath = getFilePath(id, locale)
      if (!fs.existsSync(filePath)) {
        return
      }

      // Read markdown file as string.
      const postContent = fs.readFileSync(filePath, 'utf8')

      // Parse postContent.
      const matterResult = matter(postContent)

      return {
        id,
        ...matterResult.data,
      }
    })
    .filter(post => post)

  // Sort posts by date.
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Return a list of post IDs by locale.
export function getAllPostIds(locales) {
  let paths = []

  // Get directory names as posts IDs under /posts folder.
  const postIds = fs.readdirSync(postsDirectory)

  for (let id of postIds) {
    for (let locale of locales) {
      let filePath = getFilePath(id, locale)

      // Some posts have no translation, so avoid invalid paths.
      if (!fs.existsSync(filePath)) {
        continue
      }

      paths.push({ params: { id }, locale })
    }
  }

  return paths
}

// Return the content of a specific post ID.
export async function getPostData(id, locale) {
  // Get post content.
  const filePath = getFilePath(id, locale)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // Use gray-matter to parse the post metadata section.
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string.
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml.
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}

// Return a list of post tags by locale.
export function getAllPostTags(locales) {
  let paths = []

  // Get directory names as posts IDs under /posts folder.
  const postIds = fs.readdirSync(postsDirectory)

  for (let id of postIds) {
    for (let locale of locales) {
      let filePath = getFilePath(id, locale)

      // Some posts have no translation, so avoid invalid paths.
      if (!fs.existsSync(filePath)) {
        continue
      }

      // Read markdown file as string.
      const postContent = fs.readFileSync(filePath, 'utf8')
      const matterResult = matter(postContent)

      let tags = matterResult.data.tags.split(',')
      for (let tag of tags) {
        paths.push({ params: { tag }, locale })
      }
    }
  }

  return paths
}

// Return the list of posts given a specific tag.
export async function getPostsByTag(tag, locale) {
  const allPostsData = getSortedPostsData(locale)

  return allPostsData.filter(function (post) {
    return post.tags.includes(tag)
  })
}

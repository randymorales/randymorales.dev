import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

// Get directory names as posts IDs under /posts folder.
const postIds = fs.readdirSync(postsDirectory)

// Collects information from posts files and sorts them by date.
export function getSortedPostsData() {
  // Get directory names as posts IDs under /posts folder.
  const postIDs = fs.readdirSync(postsDirectory)

  const allPostsData = postIDs
    .map(id => {
      // Get file.
      const filePath = getFilePath(id)
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

// Return a list of post IDs.
export function getAllPostIds() {
  let paths = []

  for (let id of postIds) {
    paths.push({ params: { id } })
  }

  return paths
}

// Return the markdown content of a specific post ID.
export async function getPostData(id) {
  const filePath = getFilePath(id)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // Use gray-matter to parse the post metadata section.
  const { data, content } = matter(fileContents)

  // Use remark to convert markdown into HTML string.
  const remark = (await import('remark')).remark
  const html = (await import('remark-html')).default
  const processedContent = remark().use(html).processSync(content).toString()

  const readTime = calculateReadTime(fileContents)

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml: processedContent,
    readTime,
    ...data,
  }
}

// Return a list of post tags.
export function getAllPostTags() {
  let paths = []

  for (let id of postIds) {
    let filePath = getFilePath(id)

    // Read markdown file as string.
    const postContent = fs.readFileSync(filePath, 'utf8')

    // Use gray-matter to parse the post metadata section.
    const matterResult = matter(postContent)

    let tags = matterResult.data.tags.split(',')
    for (let tag of tags) {
      paths.push({ params: { tag } })
    }
  }

  return paths
}

// Return the list of posts given a specific tag.
export async function getPostsByTag(tag) {
  const allPostsData = getSortedPostsData()
  return allPostsData.filter(post => post.tags && post.tags.includes(tag))
}

// Returns the file path like /posts/id
function getFilePath(id) {
  return path.join(postsDirectory, id)
}

// Return the estimated post read time.
function calculateReadTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

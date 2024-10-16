import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

// Get markdown file names as posts IDs under /posts folder without the '.md' extension.
const postIDs = fs
  .readdirSync(postsDirectory)
  .map(file => file.replace(/\.md$/, ''))

// Collects the metadata from all posts files and sorts them by date.
export function getAllPostsMetadata() {
  const allPostsMetadata = postIDs
    .map(id => {
      // Parse post content to obtain the metadata.
      const matterResult = getMatterResult(id)

      return {
        id,
        ...matterResult.data,
      }
    })
    .filter(post => post)

  // Sort posts by date.
  return allPostsMetadata.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Return a list of post IDs.
export function getAllPostIDs() {
  let paths = []

  for (let id of postIDs) {
    paths.push({ params: { id } })
  }

  return paths
}

// Collects the metadata from all posts files and sorts them by date.
export function getAllPosts() {
  const allPostsData = postIDs.map(id => getPostData(id)).filter(post => post)

  // Sort posts by date.
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Return the markdown content and metadata of a specific post.
export async function getPostData(id) {
  const filePath = getFilePath(id)
  const fileContents = getMDFileContent(filePath)
  const readTime = calculateReadTime(fileContents)

  // Parse the post metadata and content.
  const { data, content } = matter(fileContents)

  // Convert markdown into HTML string.
  const remark = (await import('remark')).remark
  const html = (await import('remark-html')).default
  const processedContent = remark().use(html).processSync(content).toString()

  // Return the id, content, readTime and metadata
  return {
    id,
    contentMD: processedContent,
    readTime,
    ...data,
  }
}

// Return a list of post tags.
export function getAllPostTags(isLoadingMainPage) {
  let paths = []

  for (let id of postIDs) {
    // Parse post content to obtain the metadata.
    const matterResult = getMatterResult(id)

    // Obtain tags from post metadata.
    let tags = matterResult.data.tags.split(',')
    for (let tag of tags) {
      tag = tag.toLowerCase()
      if (isLoadingMainPage) {
        paths.push({ params: { tag } })
      } else {
        paths.push(tag)
      }
    }
  }

  return paths
}

// Return the list of posts given a specific tag.
export async function getPostsMetadataByTag(tag) {
  const allPostsMetadata = getAllPostsMetadata()
  return allPostsMetadata.filter(post => post.tags && post.tags.includes(tag))
}

// Returns the file path like /posts/id.md
function getFilePath(id) {
  return path.join(postsDirectory, id)
}

// Returns the markdown content from a given file.
function getMDFileContent(filePath) {
  return fs.readFileSync(filePath + '.md', 'utf8')
}

// Returns the estimated post read time.
function calculateReadTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Returns the matter result data obtained from parsing
// a markdown file (metadata and markdown content).
function getMatterResult(postID) {
  // Get file path.
  const filePath = getFilePath(postID)

  // Read markdown file as string.
  const postContent = getMDFileContent(filePath)

  // Parse the post metadata section.
  return matter(postContent)
}

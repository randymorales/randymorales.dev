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

  // Return the id, contentMD (raw for MDX processing), readTime and metadata
  return {
    id,
    contentMD: content, // Return raw content for MDX
    readTime,
    ...data,
  }
}

// Return a list of post tags.
// If isLoadingMainPage is true, returns array of {params: {tag}} for getStaticPaths
// If false, returns object with tag counts: {tag: count}
export function getAllPostTags(isLoadingMainPage) {
  if (isLoadingMainPage) {
    // For getStaticPaths
    let paths = []
    const tagSet = new Set()

    for (let id of postIDs) {
      const matterResult = getMatterResult(id)
      let tags = matterResult.data.tags.split(',')
      for (let tag of tags) {
        tagSet.add(tag.toLowerCase())
      }
    }

    tagSet.forEach(tag => {
      paths.push({ params: { tag } })
    })

    return paths
  } else {
    // For display with counts
    const tagCounts = {}

    for (let id of postIDs) {
      const matterResult = getMatterResult(id)
      let tags = matterResult.data.tags.split(',')
      for (let tag of tags) {
        tag = tag.toLowerCase()
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      }
    }

    return tagCounts
  }
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

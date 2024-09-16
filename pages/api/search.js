import { getAllPostsMetadata } from '../../lib/posts'

export default function handler(req, res) {
  const { q } = req.query
  const posts = getAllPostsMetadata()

  if (!q) {
    // Return all posts if no query is provided.
    return res.status(200).json(posts)
  }

  const filteredPosts = posts.filter(
    post =>
      post.title.toLowerCase().includes(q.toLowerCase()) ||
      post.description.toLowerCase().includes(q.toLowerCase()),
  )

  res.status(200).json(filteredPosts)
}

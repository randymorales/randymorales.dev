import { getSortedPostsData } from '@/lib/posts'

const { defaultLocale } = require('@/i18n/config')

const posts =
  process.env.NODE_ENV === 'production'
    ? require('../../cache/data').posts
    : getSortedPostsData(defaultLocale)

export default (req, res) => {
  const results = req.query.q
    ? posts.filter(post => post.title.toLowerCase().includes(req.query.q))
    : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}

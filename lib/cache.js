import { readdirSync, mkdirSync, writeFile } from 'fs'

import { getSortedPostsData } from './posts'

function getPostsAsJSON() {
  const { defaultLocale } = require('../i18n/config')
  const posts = getSortedPostsData(defaultLocale)

  return `export const posts = ${JSON.stringify(posts)}`
}

try {
  readdirSync('cache')
} catch (e) {
  mkdirSync('cache')
}

writeFile('cache/data.js', getPostsAsJSON(), function (err) {
  if (err) return console.log(err)
  console.log('Posts cached.')
})

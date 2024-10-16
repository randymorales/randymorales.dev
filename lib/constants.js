// Keep it sorted alphabetically.
const CommentsRepo = 'randymorales/randymorales.dev-comments'
const Domain = 'randymorales.dev'
const FullName = 'Randy Morales'
const LightTheme = 'light'
const Name = 'Randy'
const NotFoundErrorCode = '404'
const PostsDirectory = '/blog/'
const SiteBaseURL = `https://${Domain}`
const SiteTitle = 'Randy Morales - Software Engineer'
const Theme = 'theme'
const TwitterUsername = '@randymoralesg'

function getTagIcon(tag) {
  const iconMap = {
    analytics: '📈',
    blog: '📝',
    cloud: '☁️',
    css: '🎨',
    database: '🛢',
    deployment: '🚀',
    golang: '🐿',
    javascript: '🟨',
    'next-js': '▲',
    python: '🐍',
    react: '⚛️',
  }

  return iconMap[tag] || '📚' // Default icon if not found
}

export {
  CommentsRepo,
  Domain,
  FullName,
  LightTheme,
  Name,
  NotFoundErrorCode,
  PostsDirectory,
  SiteBaseURL,
  SiteTitle,
  Theme,
  TwitterUsername,
  getTagIcon,
}

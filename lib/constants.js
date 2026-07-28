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

// ==========================================
// DATA FOR NEW LANDING PAGE
// ==========================================

// Experience Data (from CV)
export const EXPERIENCE_DATA = [
  {
    id: '1',
    date: 'Mar 2025 - Present',
    role: 'Software Engineer',
    company: 'Huli',
    description:
      'Developed an important feature in the electronic file called HuliPractice, streamlining the creation and management of sensitive checkup-related contracts to enhance doctor–patient interaction. Resolved critical bugs and performed code refactoring across multiple microservices, significantly improving the stability and reliability of the electronic medical record platform.',
  },
  {
    id: '2',
    date: 'Jan 2019 - Jul 2024',
    role: 'Software Engineer',
    company: 'Hewlett Packard Enterprise',
    description:
      'Developed and maintained REST API for Aruba OS-CX networking devices, providing real-time information and simplifying device interaction. Optimized boot process reducing RAM usage by over 90%. Implemented pagination support and real-time notifications using Golang. Configured NGINX servers and led debugging efforts to enhance project stability.',
  },
]

// Projects Data
export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'PennyWise',
    description:
      'A personal-finance PWA for Costa Rica with multi-currency (CRC/USD) budgets, a per-category traffic-light semáforo, transaction splits, recurring entries, debts, and savings goals. Built with Next.js, Supabase, and Tailwind CSS.',
    imageUrl: '/images/projects/pennywise-logo.png',
    imageFit: 'contain',
    link: 'https://www.pennywise.cash',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'PWA'],
  },
  {
    id: '2',
    title: 'My GitHub Assignments',
    description:
      'A native macOS menu-bar tray for the GitHub PRs and issues assigned to you: they appear when assigned, disappear when closed, and one toast fires when something new lands. Read-only by design, built with a Rust CLI and a SwiftUI shell.',
    imageUrl: '/images/projects/my-github-assignments-logo.png',
    imageFit: 'contain',
    link: 'https://github.com/randymorales/my-github-assignments',
    tags: ['Rust', 'SwiftUI', 'macOS', 'GitHub API'],
  },
]

// Education Data (from CV)
export const EDUCATION_DATA = [
  {
    id: '1',
    degree: 'Master in Cloud Computing',
    institution: 'IMMUNE Technology Institute',
    year: '2025',
  },
  {
    id: '2',
    degree: "Bachelor's in Computer Engineering",
    institution: 'Costa Rica Institute of Technology (TEC)',
    year: '2019',
  },
]

// Skills Data (from CV)
export const SKILLS_DATA = [
  'Golang',
  'Python',
  'NGINX',
  'Docker',
  'REST API',
  'gRPC',
  'Microservices',
  'Linux',
  'macOS',
  'Git',
  'AWS',
  'Jira',
  'C/C++',
  'Agile',
  'Scrum',
]

// Certificates Data (from CV)
export const CERTIFICATES_DATA = [
  {
    id: '1',
    name: 'AWS Academy Graduate: Cloud Architecting',
    issuer: 'AWS Academy',
    year: '2025',
    link: 'https://www.credly.com/badges/0a72275f-0480-4d23-8af1-3b31ab3c027f',
  },
  {
    id: '2',
    name: 'API Clean and Secure Coding: API Secure Coding',
    issuer: 'Skillsoft',
    year: '2023',
    link:
      'https://skillsoft.digitalbadges.skillsoft.com/b0c32fa0-ea71-4b97-a4d1-15b72f197011',
  },
  {
    id: '3',
    name: 'Go Essential Training',
    issuer: 'LinkedIn Learning',
    year: '2020',
    link:
      'https://www.linkedin.com/learning/certificates/a85277a34b637f86f2c62d5d822b93072ae9794e33821693cc43c9a8b0941c68',
  },
]

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

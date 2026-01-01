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
    description: 'Developed an important feature in the electronic file called HuliPractice, streamlining the creation and management of sensitive checkup-related contracts to enhance doctor–patient interaction. Resolved critical bugs and performed code refactoring across multiple microservices, significantly improving the stability and reliability of the electronic medical record platform.',
  },
  {
    id: '2',
    date: 'Jan 2019 - Jul 2024',
    role: 'Software Engineer',
    company: 'Hewlett Packard Enterprise',
    description: 'Developed and maintained REST API for Aruba OS-CX networking devices, providing real-time information and simplifying device interaction. Optimized boot process reducing RAM usage by over 90%. Implemented pagination support and real-time notifications using Golang. Configured NGINX servers and led debugging efforts to enhance project stability.',
  },
]

// Projects Data (using local SVG placeholders)
export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'Microservices Architecture Platform',
    description: 'A comprehensive microservices platform built with Golang and gRPC for high-performance distributed systems with advanced monitoring and orchestration capabilities.',
    imageUrl: '/images/projects/microservices.svg',
    link: '#',
    tags: ['Golang', 'gRPC', 'Docker', 'Microservices'],
  },
  {
    id: '2',
    title: 'REST API Gateway',
    description: 'Scalable API gateway with NGINX load balancing, rate limiting, and authentication for enterprise-grade applications. Features advanced routing and caching mechanisms.',
    imageUrl: '/images/projects/api-gateway.svg',
    link: '#',
    tags: ['Python', 'NGINX', 'REST API'],
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Automation',
    description: 'Infrastructure as Code solution for AWS cloud deployment, featuring automated scaling, monitoring, disaster recovery, and multi-region deployment capabilities.',
    imageUrl: '/images/projects/cloud-infra.svg',
    link: '#',
    tags: ['AWS', 'Docker', 'Linux'],
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
    link: 'https://skillsoft.digitalbadges.skillsoft.com/b0c32fa0-ea71-4b97-a4d1-15b72f197011',
  },
  {
    id: '3',
    name: 'Go Essential Training',
    issuer: 'LinkedIn Learning',
    year: '2020',
    link: 'https://www.linkedin.com/learning/certificates/a85277a34b637f86f2c62d5d822b93072ae9794e33821693cc43c9a8b0941c68',
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

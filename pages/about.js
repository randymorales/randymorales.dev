import { SiteBaseURL } from '@/lib/constants'
import Layout from '@/components/Layout'
import AboutSection from '@/components/AboutSection'

export default function About() {
  const pageInfo = {
    url: SiteBaseURL + '/about',
    title: 'About',
    description: 'Software Engineer based on Costa Rica 🇨🇷',
    image: SiteBaseURL + '/images/cover.png',
  }

  const tabData = {
    skills: [
      'Golang',
      'Python',
      'NGINX',
      'REST API',
      'Linux',
      'Git',
      'Effective Communication',
      'Teamwork',
      'Jira - Agile - Scrum',
      'Continuous Learning',
    ],
    education: [
      'B.S. in Computer Engineering, Costa Rica Institute of Technology, 2019',
    ],
    certificates: [
      'API Clean and Secure Coding: API Secure Coding - Skillsoft (2023)',
      'SCRUM Fundamentals Certified (SFC) - SCRUMstudy (2021)',
      'GO Essential Training - LinkedIn Learning (2020)',
    ],
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <AboutSection tabData={tabData} />
    </Layout>
  )
}

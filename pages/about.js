import Image from 'next/image'

import { Name, SiteBaseURL } from '@/lib/constants'
import Layout from '@/components/Layout'

import styles from '@/styles/about.module.css'

export default function About() {
  const pageInfo = {
    url: SiteBaseURL + '/about',
    title: 'About',
    description:
      'Software engineer based on Costa Rica 🇨🇷, graduated from TEC - Costa Rica Institute of Technology.',
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <h1 className={styles.paragraph}>Hello! I'm {Name}</h1>

      <div className={styles.container}>
        <p className={styles.paragraph}>
          I am a software engineer based on Costa Rica 🇨🇷, graduated from TEC -
          Costa Rica Institute of Technology. Professionally, I am working at
          Aruba Networks, programming features in the switch operating system.
          Personally, I like to exercise (football, MTB, gym) 🚵, play video
          games 🎮, and read 📖. Music? Mostly “classic rock” 🎸.' This website
          is the fusion of the professional and personal world. I want to use
          this website to learn and teach in public about what I discover
          throughout my career since I consider myself as a 'forever student'.
          My long-term goal is to be a software architect and I hope that
          journey will be documented here. Feel free to reach me out and I hope
          you enjoy my blog posts 📝.
        </p>

        <h2 className={styles.subtitle}>Skills & Tools</h2>
        <ul className={styles.skills}>
          <li>Go</li>
          <li>C</li>
          <li>Linux</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>NextJS</li>
          <li>Git</li>
        </ul>

        <h2 className={styles.subtitle}>Stats</h2>
        <div className={styles.statistics}>
          {/* Strava */}
          <iframe
            title='Strava statistics'
            height='460'
            width='350'
            allowtransparency='true'
            src='https://www.strava.com/athletes/40609050/latest-rides/aa328eaf2e21d69d776d04ab20deda9d5c3058f9'
          ></iframe>

          {/* GitHub */}
          <img
            className={styles.center}
            src='https://github-readme-stats.vercel.app/api?username=randymorales'
            alt='GitHub statistics'
            width='540'
            height='460'
          />
        </div>

        <h1 className={styles.subtitle}>Gallery</h1>
        <div className={styles.photos}>
          <Image
            src='/images/college-graduation.jpg'
            alt='college graduation photo'
            width='320'
            height='680'
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <Image
            src='/images/mtb.jpg'
            alt='moravia mtb photo'
            width='490'
            height='680'
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <Image
            src='/images/alajuela.jpg'
            alt='iberico photo'
            width='450'
            height='680'
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

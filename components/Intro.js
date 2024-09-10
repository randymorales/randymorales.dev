import Image from 'next/image'

import { Name } from '@/lib/constants'
import introStyles from '@/styles/intro.module.css'

export default function Intro() {
  return (
    <section className={introStyles.container}>
      <div className={introStyles.profileInfo}>
        <Image
          src='/images/profile.jpg'
          className={introStyles.profileImage}
          alt='site author photo'
          width='300'
          height='300'
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div className={introStyles.description}>
        <h1>
          {"Hello! I'm"} {Name}
        </h1>

        <p>
          A Costa Rican Software Engineer writing these posts about things I
          am familiar with and learning.
        </p>

        <ul className={introStyles.socialNetworks}>
          <li>
            <a
              href='https://twitter.com/randymoralesg'
              target='_blank'
              rel='noopener'
              aria-label='Twitter'
            >
              <i aria-hidden className='fab fa-twitter big-icon'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/randymoralesg/'
              target='_blank'
              rel='noopener'
              aria-label='LinkedIn'
            >
              <i aria-hidden className='fab fa-linkedin big-icon'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/randymorales'
              target='_blank'
              rel='noopener'
              aria-label='GitHub'
            >
              <i aria-hidden className='fab fa-github big-icon'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.strava.com/athletes/randymorales'
              target='_blank'
              rel='noopener'
              aria-label='Strava'
            >
              <i aria-hidden className='fab fa-strava'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

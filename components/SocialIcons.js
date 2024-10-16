import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaSquareXTwitter } from 'react-icons/fa6'

const socialLinks = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/randymoralesg/' },
  { Icon: FaGithub, href: 'https://github.com/randymorales/' },
  { Icon: FaSquareXTwitter, href: 'https://x.com/randymoralesg' },
]

const SocialIcons = ({ className = '', iconClassName = '' }) => {
  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      {socialLinks.map(({ Icon, href }) => (
        <Link
          key={href}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-accentColor transition-colors'
        >
          <Icon className={`text-4xl ${iconClassName}`} />
        </Link>
      ))}
    </div>
  )
}

export default SocialIcons

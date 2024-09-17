import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from './Search'
import { FaLinkedin, FaGithub, FaSquareXTwitter } from 'react-icons/fa6'

const NavLink = ({ href, label}) => {
  const router = useRouter()
  const isActive = router.pathname === href || router.pathname.startsWith(href)
  return (
    <Link
      href={href}
      className={`${
        isActive
          ? 'text-secondaryColor text-xl'
          : 'text-white hover:text-secondaryColor text-xl'
      }`}
    >
      {label}
    </Link>
  )
}

const SearchButton = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`text-white hover:text-secondaryColor ${className}`}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </svg>
  </button>
)

const HamburgerMenuButton = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`text-white hover:text-secondaryColor ${className}`}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-8 w-8'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  </button>
)

const Logo = ({ className = '', imageClassName = '' }) => (
  <Link
    href='/'
    className={`flex flex-col items-center font-bold text-2xl ${className}`}
  >
    <Image
      src='/logo-transparent.svg'
      alt='Logo'
      width={64}
      height={64}
      className={`object-cover object-center ${imageClassName}`}
      priority
    />
    <span className='hidden lg:block text-white hover:text-secondaryColor text-2xl font-semibold whitespace-nowrap'>
      Randy Morales
    </span>
  </Link>
)

const SocialIcons = () => (
  <div className='flex justify-center space-x-4'>
    {[
      { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/randymoralesg/' },
      {
        Icon: FaGithub,
        href: 'https://github.com/randymorales/randymorales.dev/',
      },
      { Icon: FaSquareXTwitter, href: 'https://x.com/randymoralesg' },
    ].map(({ Icon, href }, index) => (
      <Link
        key={index}
        href={href}
        className='text-white hover:text-secondaryColor'
      >
        <Icon className='text-white hover:text-secondaryColor transition-colors text-4xl' />
      </Link>
    ))}
  </div>
)

const NavLinks = () => (
  <>
    <NavLink href='/blog' label='Blog' />
    <NavLink href='/tags' label='Tags' />
    <NavLink href='/projects' label='Projects' />
    <NavLink href='/about' label='About' />
  </>
)

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Mobile Navbar */}
      <nav className='lg:hidden sticky top-0 z-10 bg-primaryColor/90 py-7 mb-16 px-7'>
        <div className='container mx-auto flex justify-between items-center'>
          <Logo className='flex-row' />
          <div className='flex items-center'>
            <SearchButton onClick={toggleSearch} className='mx-2' />
            <HamburgerMenuButton onClick={toggleMenu} className='mx-2' />
          </div>
        </div>
        {isMenuOpen && (
          <div className='mt-4 space-y-4 flex flex-col items-center text-lg'>
            <NavLinks />
          </div>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className='hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-primaryColor/90 py-7 px-4'>
        <Logo imageClassName='w-32 h-32'/>
        <div className='flex flex-col justify-center space-y-6 items-center flex-grow'>
          <SearchButton onClick={toggleSearch} />
          <NavLinks />
        </div>
        <SocialIcons />
      </nav>

      {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}
    </>
  )
}

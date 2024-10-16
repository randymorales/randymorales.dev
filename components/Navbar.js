import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from '@/components/Search'
import SocialIcons from '@/components/SocialIcons'

const NavLink = ({ href, label }) => {
  const router = useRouter()
  const isActive = router.pathname === href || router.pathname.startsWith(href)
  return (
    <Link
      href={href}
      className={`${
        isActive
          ? 'text-accentColor text-xl'
          : 'text-white hover:text-accentColor text-xl'
      }`}
    >
      {label}
    </Link>
  )
}

const SearchButton = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`text-white hover:text-accentColor ${className}`}
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
    className={`text-white hover:text-accentColor ${className}`}
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
    <span className='hidden lg:block text-white hover:text-accentColor text-xl font-semibold whitespace-nowrap'>
      Randy Morales
    </span>
  </Link>
)

const NavLinks = () => (
  <>
    <NavLink href='/blog' label='Blog' />
    <NavLink href='/tags' label='Tags' />
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
      <nav className='bg-darkBackground lg:hidden sticky top-0 z-10 py-7 mb-16 px-7'>
        <div className='container mx-auto flex justify-between items-center'>
          <Logo className='flex-row' />
          <div className='flex items-center'>
            <SearchButton onClick={toggleSearch} className='mx-2' />
            <HamburgerMenuButton onClick={toggleMenu} className='mx-2' />
          </div>
        </div>
        {isMenuOpen && (
          <div className='container mx-auto mt-4 pb-10 space-y-4 flex flex-col items-center text-lg border-b border-b-gray-700'>
            <NavLinks />
          </div>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className='hidden lg:flex flex-col fixed left-0 top-0 h-screen w-48 py-7 px-4 border-r border-r-gray-700'>
        <Logo imageClassName='w-32 h-32' />
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

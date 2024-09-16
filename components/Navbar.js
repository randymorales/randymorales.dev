import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from './Search'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const NavLink = ({ href, label }) => (
    <Link
      href={href}
      className={`text-white hover:text-secondaryColor mx-2 text-lg ${
        router.pathname === href || router.pathname.startsWith(href)
          ? 'text-secondaryColor'
          : ''
      }`}
    >
      {label}
    </Link>
  )

  return (
    <nav className='sticky top-0 z-10 bg-primaryColor/90 py-7 mb-16'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex font-bold text-2xl'>
          <Image
            src='/logo-transparent.svg'
            alt='Logo'
            width={32}
            height={32}
            className='w-full h-16 object-cover object-center mr-2'
            priority
          />
          {/* Hide Randy Morales on mobile */}
          <span className='hidden lg:inline self-center text-white hover:text-secondaryColor text-2xl font-semibold whitespace-nowrap'>
            Randy Morales
          </span>
        </Link>

        <div className='flex items-center'>
          {/* Search button for Mobile */}
          <button
            onClick={toggleSearch}
            className='lg:hidden text-white hover:text-secondaryColor mx-2'
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

          {/* Hamburger Menu for Mobile */}
          <button
            className='lg:hidden text-white hover:text-secondaryColor mx-2'
            onClick={toggleMenu}
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

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center space-x-4'>
            <NavLink href='/blog' label='Blog' />
            <NavLink href='/tags' label='Tags' />
            <NavLink href='/projects' label='Projects' />
            <NavLink href='/about' label='About' />
            <button
              onClick={toggleSearch}
              className='text-white hover:text-secondaryColor mx-2'
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
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden mt-4 space-y-4 flex flex-col items-center text-lg'>
          <NavLink href='/blog' label='Blog' />
          <NavLink href='/tags' label='Tags' />
          <NavLink href='/projects' label='Projects' />
          <NavLink href='/about' label='About' />
        </div>
      )}

      {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}
    </nav>
  )
}

export default Navbar

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', section: 'hero' },
  { name: 'Experience', href: '/#experience', section: 'experience' },
  { name: 'Projects', href: '/#projects', section: 'projects' },
  { name: 'About', href: '/#about', section: 'about' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavClick = (e, href, section) => {
    if (section && router.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800'>
      {/* Skip to main content link */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded'
      >
        Skip to main content
      </a>

      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Main navigation'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded'>
            <Image
              src='/logo-transparent.svg'
              alt='Randy Morales logo'
              width={32}
              height={32}
              className='transition-transform group-hover:scale-110'
            />
            <span className='text-white font-semibold text-lg hidden sm:block'>
              Randy Morales
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.section)}
                aria-current={router.pathname === item.href || (item.href === '/' && router.pathname === '/') ? 'page' : undefined}
                className='text-zinc-300 hover:text-red-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded px-2 py-1'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type='button'
            className='md:hidden text-zinc-300 hover:text-white transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
            aria-expanded={mobileMenuOpen}
            aria-controls='mobile-menu'
          >
            {mobileMenuOpen ? <X size={24} aria-hidden='true' /> : <Menu size={24} aria-hidden='true' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id='mobile-menu' className='md:hidden py-4 border-t border-zinc-800'>
            <div className='flex flex-col gap-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href, item.section)
                  }}
                  aria-current={router.pathname === item.href || (item.href === '/' && router.pathname === '/') ? 'page' : undefined}
                  className='text-zinc-300 hover:text-red-400 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
import SocialIcons from './SocialIcons'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-zinc-950 border-t border-zinc-800 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-8'>
          {/* Left Side: Name and Text */}
          <div className='text-center md:text-left'>
            <h3 className='text-2xl font-bold text-white mb-2'>Randy Morales</h3>
            <p className='text-zinc-300 text-sm'>
              Crafting scalable systems and elegant solutions
            </p>
          </div>

          {/* Right Side: Social Icons */}
          <div className='flex items-center'>
            <SocialIcons />
          </div>
        </div>

        {/* Copyright and Made with */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-zinc-800 text-zinc-400 text-sm'>
          <div className='text-left'>
            © {currentYear} Randy Morales. All rights reserved.
          </div>
          <div className='flex items-center gap-1.5'>
            <span>Made with</span>
            <Heart size={14} className='fill-red-500 text-red-500' aria-hidden='true' />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
import SocialIcons from './SocialIcons'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-zinc-950 border-t border-zinc-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-col items-center gap-6'>
          {/* Social Icons */}
          <SocialIcons className='justify-center' />

          {/* Copyright */}
          <div className='flex items-center gap-2 text-zinc-400 text-sm'>
            <span>© {currentYear} Randy Morales</span>
            <span>·</span>
            <span className='flex items-center gap-1'>
              Built with <Heart size={16} className='fill-red-500 text-red-500' /> and Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
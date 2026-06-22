import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { PROJECTS_DATA } from '@/lib/constants'

export default function Projects() {
  return (
    <section id='projects' className='py-20 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Featured Projects
          </h2>
          <div className='w-20 h-1 bg-red-600 mx-auto rounded-full'></div>
        </div>

        {/* Projects Grid (centered; wraps for multiple) */}
        <div className='flex flex-wrap justify-center gap-8'>
          {PROJECTS_DATA.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group w-full max-w-sm bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors flex flex-col'
            >
              {/* Image */}
              <div className='relative h-48 bg-zinc-800 overflow-hidden'>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 384px'
                  priority={index === 0}
                  className={
                    project.imageFit === 'contain'
                      ? 'object-contain p-8 group-hover:scale-105 transition-transform duration-300'
                      : 'object-cover group-hover:scale-110 transition-transform duration-300'
                  }
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                {/* Title */}
                <div className='flex items-start justify-between mb-3'>
                  <h3 className='text-lg font-bold text-white group-hover:text-red-400 transition-colors'>
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className='text-zinc-400 group-hover:text-red-400 transition-colors flex-shrink-0 ml-2'
                    aria-hidden='true'
                  />
                </div>

                {/* Description */}
                <p className='text-zinc-400 text-sm mb-4 line-clamp-3'>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-red-900/30 border border-red-900/50 text-red-300 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
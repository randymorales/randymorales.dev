import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Tag as TagIcon, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

export default function Blogs({ posts, showHeader = true, showViewAll = true }) {
  return (
    <section id='blogs' className={showHeader ? 'py-20 bg-zinc-900' : ''}>
      <div className={showHeader ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''}>
        {/* Header - only show on landing page */}
        {showHeader && (
          <div className='flex flex-col md:flex-row justify-between items-center mb-16'>
            <div className='text-center md:text-left mb-6 md:mb-0'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Latest Insights
              </h2>
              <div className='w-20 h-1 bg-red-600 rounded-full mx-auto md:mx-0'></div>
            </div>
            {showViewAll && (
              <Link
                href='/blog'
                className='hidden md:flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium'
              >
                View all posts
                <ArrowRight size={20} aria-hidden='true' />
              </Link>
            )}
          </div>
        )}

        {/* Posts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className='group bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors flex flex-col'
            >
              {/* Image */}
              <div className='relative h-48 bg-zinc-800 overflow-hidden'>
                <Image
                  src={post.image || '/images/cover.png'}
                  alt={post.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-6 flex-1 flex flex-col'>
                {/* Meta */}
                <div className='flex items-center gap-4 text-xs text-zinc-300 mb-3'>
                  <div className='flex items-center gap-1'>
                    <Calendar className='w-3 h-3' aria-hidden='true' />
                    <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                  </div>
                  {post.tags && (
                    <div className='flex items-center gap-1'>
                      <TagIcon className='w-3 h-3 text-red-400' aria-hidden='true' />
                      <span className='text-red-400'>{post.tags.split(',')[0].trim()}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className='text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-3'>
                  {post.title}
                </h3>

                {/* Description */}
                <p className='text-zinc-300 text-sm line-clamp-3 mb-4 flex-1'>
                  {post.description}
                </p>

                {/* Read more link */}
                <div className='flex items-center gap-2 text-red-400 font-medium text-sm'>
                  <span>Read Article</span>
                  <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' aria-hidden='true' />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View all link - only on landing page */}
        {showHeader && showViewAll && (
          <div className='text-center mt-12 md:hidden'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium'
            >
              View all posts
              <ArrowRight size={20} aria-hidden='true' />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
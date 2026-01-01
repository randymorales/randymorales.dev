import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

export default function Blogs({ posts }) {
  return (
    <section id='blogs' className='py-20 bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex justify-between items-center mb-16'>
          <div>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Latest Insights
            </h2>
            <p className='text-zinc-400 text-lg'>
              Recent posts from my blog
            </p>
          </div>
          <Link
            href='/blog'
            className='hidden md:flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium'
          >
            View all posts
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className='group bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300'
            >
              <div className='p-6'>
                {/* Meta */}
                <div className='flex items-center gap-4 text-sm text-zinc-400 mb-3'>
                  <div className='flex items-center gap-1'>
                    <Calendar size={16} />
                    <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                  </div>
                  {post.tags && (
                    <div className='flex items-center gap-1'>
                      <Tag size={16} />
                      <span>{post.tags.split(',')[0]}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-3'>
                  {post.title}
                </h3>

                {/* Description */}
                <p className='text-zinc-400 line-clamp-3 mb-4'>
                  {post.description}
                </p>

                {/* Tags */}
                {post.tags && (
                  <div className='flex flex-wrap gap-2'>
                    {post.tags.split(',').slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className='px-3 py-1 bg-red-900/30 border border-red-900/50 text-red-300 text-xs rounded-full'
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View all" link */}
        <div className='text-center mt-12 md:hidden'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium'
          >
            View all posts
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag as TagIcon } from 'lucide-react'
import { format } from 'date-fns'
import { PostsDirectory } from '@/lib/constants'
import Tag from '@/components/Tag'

export default function PostCard({ post }) {
  const { id, image, tags, title, description, date } = post
  const tagsList = tags.split(',')
  const url = `${PostsDirectory}${id}`

  return (
    <Link href={url}>
      <article className='group bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 flex flex-col h-full'>
        {/* Image */}
        <div className='relative aspect-video bg-zinc-900 overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover group-hover:scale-110 transition-transform duration-500'
          />
        </div>

        {/* Content */}
        <div className='p-6 flex flex-col flex-1'>
          {/* Metadata */}
          <div className='flex items-center gap-4 text-xs text-zinc-300 mb-3'>
            <div className='flex items-center gap-1'>
              <Calendar className='w-3 h-3' aria-hidden='true' />
              <span>{format(new Date(date), 'MMM dd, yyyy')}</span>
            </div>
            {tags && (
              <div className='flex items-center gap-1'>
                <TagIcon className='w-3 h-3 text-red-400' aria-hidden='true' />
                <span className='text-red-400'>{tagsList[0].trim()}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className='text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-3 line-clamp-2'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-zinc-300 text-sm line-clamp-3 mb-4 flex-1'>
            {description}
          </p>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mt-auto'>
            {tagsList.slice(0, 3).map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}

import Image from 'next/image'
import { EyeIcon, CalendarIcon, ClockIcon } from 'lucide-react'

import PublishedDate from '@/components/PublishedDate'
import Tag from '@/components/Tag'

export default function BlogPostHeader({ postData }) {
  return (
    <div className='container py-8'>
      {/* Title and metadata container */}
      <div className='flex flex-col xl:flex-row xl:items-start items-center xl:justify-between'>
        <div className='my-auto xl:w-1/2 xl:pr-8'>
          <h1 className='text-3xl xl:text-4xl lg:text-5xl font-bold mb-6 text-accentColor'>
            {postData.title}
          </h1>
          <div className='w-4/5 flex flex-wrap justify-between items-center my-6 text-sm xl:text-base'>
            <div className='flex items-center mr-4 mb-2'>
              <EyeIcon className='w-4 h-4 mr-2' />
              <span>{postData.views} views</span>
            </div>
            <div className='flex items-center mr-4 mb-2'>
              <CalendarIcon className='w-4 h-4 mr-2' />
              <PublishedDate dateString={postData.date} />
            </div>
            <div className='flex items-center mr-4 mb-2'>
              <ClockIcon className='w-4 h-4 mr-2' />
              <span>{postData.readTime} min read</span>
            </div>
          </div>
          <div className='flex flex-wrap items-center mt-4'>
            {postData.tags.split(',').map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* Image container with fixed size */}
        <div className='w-full xl:w-1/2 mt-6 xl:mt-0 mb-7 order-first xl:order-last'>
          <Image
            className='rounded-xl w-96 min-h-48 max-h-72 mx-auto object-contain'
            src={postData.image}
            alt='cover image'
            width={300}
            height={250}
            priority
          />
        </div>
      </div>
    </div>
  )
}

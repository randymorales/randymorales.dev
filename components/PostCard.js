import Image from 'next/image'
import Link from 'next/link'

import PublishedDate from '@/components/PublishedDate'
import blogStyles from '@/styles/blog.module.css'

export default function PostCard({
  url,
  title,
  description,
  date,
  tags,
  image,
}) {
  const tagsList = tags.split(',')

  return (
    <article className='className="max-w-md rounded-xl overflow-hidden bg-primaryColor border-b-4 border-r-4 border-gray-700'>
      <Link href={url} passHref>
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className='w-full h-48 object-cover object-center'
          priority
        />
      </Link>
      <div className='p-4'>
        <span className='text-yellow-400 text-sm font-semibold'>
          {tagsList.map(tag => (
            <Link
              href={`/tags/${tag}/`}
              key={tag}
              className={[blogStyles.cardTag, tag].join(' ')}
            >
              {tag}
            </Link>
          ))}
        </span>
        <Link href={url} passHref>
          <h3 className='text-xl font-semibold mt-2 hover:text-secondaryColor'>
            {title}
          </h3>
        </Link>
        <PublishedDate
          className='capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base'
          dateString={date}
        />
        <p className='text-gray-300 text-sm mt-2'>{description}</p>
      </div>
    </article>
  )
}

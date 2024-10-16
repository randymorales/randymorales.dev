import Image from 'next/image'
import Link from 'next/link'
import { PostsDirectory } from '@/lib/constants'
import PublishedDate from '@/components/PublishedDate'
import Tag from '@/components/Tag'

export default function PostCard({ post }) {
  const { id, image, tags, title, description, date } = post
  const tagsList = tags.split(',')
  const url = `${PostsDirectory}${id}`

  return (
    <article className='rounded-lg overflow-hidden shadow-lg h-96 md:h-56 flex flex-col md:flex-row items-center'>
      <Link href={url} className='md:w-1/3 block'>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className='w-full h-full object-contain'
        />
      </Link>
      <div className='p-6 w-full md:w-2/3 flex flex-col justify-between overflow-hidden'>
        <div className='mb-4'>
          {tagsList.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div>
          <Link href={url} className='block mb-2'>
            <h3 className='text-xl font-bold text-white hover:text-accentColor transition-colors line-clamp-2'>
              {title}
            </h3>
          </Link>
          <p className='text-gray-400 text-sm line-clamp-2 mb-4'>
            {description}
          </p>
          <PublishedDate
            dateString={date}
            className='text-gray-400 text-sm mb-2'
          />
        </div>
      </div>
    </article>
  )
}

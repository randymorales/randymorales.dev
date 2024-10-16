import Link from 'next/link'

import { getTagIcon } from '@/lib/constants'

export default function Tag({ index, tag }) {
  return (
    <Link
      key={index}
      href={`/tags/${tag}`}
      className='bg-gray-700 text-gray-200 px-3 py-2 rounded-full text-sm hover:bg-gray-600'
    >
      <span className='text-md 2xl:text-lg'>{getTagIcon(tag) + ' ' + tag}</span>
    </Link>
  )
}

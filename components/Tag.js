import Link from 'next/link'

export default function Tag({ index, tag }) {
  const trimmedTag = tag.trim()

  return (
    <Link
      key={index}
      href={`/tags/${trimmedTag}`}
      className='inline-block px-3 py-1 bg-red-900/30 border border-red-900/50 text-red-300 text-xs rounded-full hover:border-red-500/50 transition-colors'
    >
      {trimmedTag}
    </Link>
  )
}

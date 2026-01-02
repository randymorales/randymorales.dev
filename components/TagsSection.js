import Link from 'next/link'
import { Tag as TagIcon, ArrowRight } from 'lucide-react'

export default function TagsSection({ tags }) {
  // tags is an object { tagName: count }
  const sortedTags = Object.entries(tags).sort((a, b) => a[0].localeCompare(b[0]))

  return (
    <aside className='sticky top-24'>
      <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6'>
        <div className='flex items-center gap-2 mb-6'>
          <TagIcon className='text-red-400' size={20} />
          <h2 className='text-lg font-bold text-white'>Browse by Tag</h2>
        </div>
        <div className='space-y-2'>
          {/* View all tags link */}
          <Link
            href='/tags'
            className='flex items-center justify-between px-4 py-2 rounded-lg bg-zinc-800 text-red-400 hover:bg-zinc-700 hover:text-red-300 transition-colors group'
          >
            <span className='text-sm font-medium'>View all tags</span>
            <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
          </Link>

          {/* Individual tags */}
          {sortedTags.map(([tag, count]) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className='flex items-center justify-between px-4 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-red-400 transition-colors group'
            >
              <span className='text-sm'>{tag}</span>
              <span className='text-xs bg-zinc-800 group-hover:bg-zinc-700 px-2 py-1 rounded-full text-zinc-400 group-hover:text-red-400 transition-colors'>
                {count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

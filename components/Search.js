import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search as SearchIcon, X } from 'lucide-react'
import { format } from 'date-fns'

const Search = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch('/api/search')
      const data = await response.json()
      setSearchResults(data)
    }

    fetchAllPosts()

    // Close the modal with the ESC key
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchTerm)}`,
      )
      const data = await response.json()
      setSearchResults(data)
    }

    if (searchTerm.trim() !== '') {
      fetchSearchResults()
    }
  }, [searchTerm])

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-zinc-950/80 backdrop-blur-sm'>
      <div className='bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl mx-4 shadow-2xl'>
        {/* Header */}
        <div className='relative p-6 flex items-center gap-3 border-b border-zinc-800'>
          <SearchIcon className='text-zinc-400' size={20} />
          <input
            type='text'
            placeholder='Search blog posts...'
            className='flex-1 bg-transparent text-white placeholder:text-zinc-500 focus:outline-none text-lg'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            className='p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition-colors'
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div className='max-h-96 overflow-y-auto'>
          {searchResults.length === 0 && searchTerm.trim() === '' && (
            <div className='p-6 text-center text-zinc-500 text-sm'>
              Start typing to search posts
            </div>
          )}
          {searchResults.length === 0 && searchTerm.trim() !== '' && (
            <div className='p-6 text-center text-zinc-500 text-sm'>
              No results found for "{searchTerm}"
            </div>
          )}
          {searchResults.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className='block px-6 py-4 hover:bg-zinc-800 border-b border-zinc-800 last:border-0 transition-colors group'
              onClick={onClose}
            >
              <p className='text-zinc-400 text-xs mb-1'>
                {format(new Date(post.date), 'MMM dd, yyyy')}
              </p>
              <p className='text-white group-hover:text-red-400 font-medium transition-colors'>
                {post.title}
              </p>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className='px-6 py-3 text-center text-xs text-zinc-500 border-t border-zinc-800 bg-zinc-900/50'>
          Press <kbd className='px-2 py-1 bg-zinc-800 rounded text-zinc-400'>ESC</kbd> to close
        </div>
      </div>
    </div>
  )
}

export default Search

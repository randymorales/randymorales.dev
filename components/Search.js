import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import PublishedDate from '@/components/PublishedDate'

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
    <div className='overflow-hidden border border-gray-100 fixed inset-0 flex items-center justify-center z-50 bg-gray-500/50 backdrop-blur backdrop-filter'>
      <div className='bg-darkBackground rounded-lg w-full max-w-2xl'>
        <div className='relative p-6 flex items-center justify-center'>
          <input
            type='text'
            placeholder='Search blog posts'
            className='w-full bg-primaryColor text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accentColor'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            onClick={onClose}
            className='text-2xl text-white hover:text-accentColor ml-5'
          >
            &times;
          </button>
        </div>
        <div className='max-h-96 overflow-y-auto divide-y'>
          {searchResults.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className='block px-6 py-7 hover:bg-primaryColor text-base'
            >
              <PublishedDate
                className='text-gray-400 text-sm'
                dateString={post.date}
              />
              <p className='text-accentColor hover:underline'>{post.title}</p>
            </Link>
          ))}
        </div>
        <p className='p-2 text-center text-sm text-gray-500'>
          Press ESC to close
        </p>
      </div>
    </div>
  )
}

export default Search

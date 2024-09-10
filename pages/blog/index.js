import { useCallback, useRef, useState } from 'react'

import Link from 'next/link'

import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
import { getAllPostsMetadata } from '@/lib/posts'
import BlogPostsSection from '@/components/BlogPostsSection'
import Layout from '@/components/Layout'
import styles from '@/styles/blog.module.css'

export default function BlogIndex({ allPostsMetadata }) {
  const pageInfo = {
    url: SiteBaseURL + PostsDirectory,
    title: 'Blog',
    description: 'Randy Morales - Programming Blog',
    image: SiteBaseURL + '/images/cover.png',
  }

  const searchRef = useRef(null)
  const [active, setActive] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [searchInputResult, setSearchInputResult] = useState([])

  const searchEndpoint = searchInput => `/api/search?q=${searchInput}`

  const onChange = useCallback(event => {
    const searchInput = event.target.value.toLowerCase()
    setSearchInput(searchInput)
    if (searchInput.length) {
      fetch(searchEndpoint(searchInput))
        .then(res => res.json())
        .then(res => {
          setSearchInputResult(res.results)
        })
    } else {
      setSearchInputResult([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback(event => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <div className={styles.container}>
        {/* Search bar */}
        <div ref={searchRef}>
          <input
            className={styles.search}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={'🔎 ' + 'Search'}
            type='text'
            value={searchInput}
          />
        </div>

        {/* Tags */}
        <div>
          {getAllTags(allPostsMetadata).map(tag => (
            <Link
              href={`/tags/${tag}/`}
              key={tag}
              className={[styles.cardTag, tag].join(' ')}
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Show blog post list */}
        {searchInputResult.length == 0 && searchInput != '' && active ? (
          <> </>
        ) : (
          <BlogPostsSection
            title='Latest Posts'
            posts={getPostsSource(searchInputResult, allPostsMetadata)}
          />
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  let allPostsMetadata = getAllPostsMetadata()

  return {
    props: {
      allPostsMetadata,
    },
  }
}

// Return the list of all tags.
function getAllTags(allPostsMetadata) {
  const tagsList = []

  allPostsMetadata.map(({ tags }) =>
    tags
      .split(',')
      .map(tag => tagsList.indexOf(tag) === -1 && tagsList.push(tag)),
  )

  return tagsList
}

// Return the list of posts according to the input searchInputResult.
function getPostsSource(searchInputResult, allPostsMetadata) {
  return searchInputResult.length == 0 ? allPostsMetadata : searchInputResult
}

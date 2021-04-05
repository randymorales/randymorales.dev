import { useCallback, useRef, useState } from 'react'

import Link from 'next/link'

import { PostsDirectory } from '@/lib/constants'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'

import styles from '@/styles/blog.module.css'

function getPostsSource(results, allLocalePostsData) {
  return results.length == 0 ? allLocalePostsData : results
}

function getAllTags(allLocalePostsData) {
  const tagsList = []

  allLocalePostsData.map(({ tags }) =>
    tags
      .split(',')
      .map(tag => tagsList.indexOf(tag) === -1 && tagsList.push(tag)),
  )

  return tagsList
}

export default function BlogIndex({ allLocalePostsData }) {
  const { t } = useTranslation()

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = query => `/api/search?q=${query}`

  const onChange = useCallback(event => {
    const query = event.target.value
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
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
    <Layout pageTitle={t('blog')}>
      <div ref={searchRef}>
        <div className={styles.container}>
          {/* Search bar */}
          <input
            className={styles.search}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={t('search-posts')}
            type='text'
            value={query}
          />
        </div>

        {/* Tags */}
        <div className={styles.container}>
          {getAllTags(allLocalePostsData).map(tag => (
            <Link href={`/tags/${tag}/`} key={tag}>
              <a className={[styles.cardTag, tag].join(' ')}>{tag}</a>
            </Link>
          ))}
        </div>

        {/* Show blog posts list */}
        <section className={styles.cardsContainer}>
          {results.length == 0 && query != '' && active ? (
            <> </>
          ) : (
            <>
              {getPostsSource(results, allLocalePostsData).map(
                ({ id, title, description, date, tags, image }) => (
                  <PostCard
                    key={id}
                    url={`${PostsDirectory}${id}`}
                    title={title}
                    description={description}
                    date={date}
                    tags={tags}
                    image={image}
                  />
                ),
              )}
            </>
          )}
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  let allLocalePostsData = getSortedPostsData(locale)

  return {
    props: {
      allLocalePostsData,
    },
  }
}

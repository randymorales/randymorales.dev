import { useCallback, useRef, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
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
  const router = useRouter()
  const { locale } = router

  const pageInfo = {
    url: SiteBaseURL + `/${locale}` + PostsDirectory,
    title: t('blog'),
    description: t('slogan'),
    image: SiteBaseURL + '/images/cover.png',
  }

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const searchEndpoint = query => `/api/search?q=${query}`

  const onChange = useCallback(event => {
    const query = event.target.value.toLowerCase()
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

  return (
    <Layout pageInfo={pageInfo} large={true}>
      {/* Search bar */}
      <div className={styles.container}>
        <div ref={searchRef}>
          <input
            className={styles.search}
            onChange={onChange}
            placeholder={'🔎 ' + t('search-posts')}
            type='text'
            value={query}
          />
        </div>

        {/* Tags */}
        <div>
          {getAllTags(allLocalePostsData).map(tag => (
            <Link
              href={`/tags/${tag}/`}
              key={tag}
              className={[styles.cardTag, tag].join(' ')}>
              {tag}
            </Link>
          ))}
        </div>

        {/* Show blog posts list */}
        <section className={styles.cardsContainer}>
          {results.length == 0 && query != '' ? (
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
  );
}

export const getStaticProps = async ({ locale }) => {
  let allLocalePostsData = getSortedPostsData(locale)

  return {
    props: {
      allLocalePostsData,
    },
  }
}

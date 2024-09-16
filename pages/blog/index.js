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

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <div className={styles.container}>
        <h2 className='text-white text-2xl font-bold mb-6'>All Tags</h2>
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
        <BlogPostsSection title='All Posts' posts={allPostsMetadata} />
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

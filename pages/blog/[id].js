import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { createRef, useEffect } from 'react'
import useSWR from 'swr'

import {
  CommentsRepo,
  DarkTheme,
  PostsDirectory,
  SiteBaseURL,
  Theme,
} from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Comment from '@/components/Comment'
import Layout from '@/components/Layout'
import PublishedDate from '@/components/PublishedDate'

import blogStyles from '@/styles/blog.module.css'

export default function Post({ postData }) {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation()
  const commentBox = createRef()
  const prism = require('prismjs')
  const pageInfo = {
    url: SiteBaseURL + `/${locale}` + PostsDirectory + postData.id,
    title: postData.title,
    description: postData.description,
    image: postData.image,
    type: 'article',
  }

  // Import prism highlighting for other languages because they are not
  // included by default
  require('prismjs/components/prism-bash')
  require('prismjs/components/prism-c')
  require('prismjs/components/prism-go')
  require('prismjs/components/prism-json')
  require('prismjs/components/prism-python')

  // Apply prism in all code blocks
  useEffect(() => {
    prism.highlightAll()
  }, [])

  // Add comments script with Utterances.
  useEffect(() => {
    const commentScript = document.createElement('script')
    const theme =
      typeof window !== 'undefined' && localStorage.getItem(Theme) === DarkTheme
        ? 'github-dark'
        : 'github-light'
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    // CHANGE REPO VAlUE if you are just going to clone this repo and use the code.
    // Please do not test your code using my repo.
    commentScript.setAttribute('repo', CommentsRepo)
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('theme', theme)
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.error(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [])

  // Page views count
  const { data } = useSWR(
    `/api/page-views?post=${encodeURIComponent(PostsDirectory + postData.id)}`,
    async url => {
      const res = await fetch(url)
      return res.json()
    },
    { revalidateOnFocus: false },
  )
  const views = data?.pageViews

  return (
    <Layout pageInfo={pageInfo}>
      <Image
        className={blogStyles.postImage}
        src={postData.image}
        alt='cover image'
        width={1920}
        height={500}
        priority
      />

      <h1>{postData.title}</h1>

      <p className={blogStyles.postDescription}>{postData.description}</p>

      <div className={blogStyles.postMetadata}>
        <div>
          {views} {t('views')}
        </div>
        <span>
          <PublishedDate dateString={postData.date} locale={locale} />
        </span>

        <span> | </span>

        <div>
          {postData.tags.split(',').map(tag => (
            <Link href={`/tags/${tag}/`} key={tag}>
              <a className={[blogStyles.cardTag, tag].join(' ')}>{tag}</a>
            </Link>
          ))}
        </div>
      </div>

      <div className='page-separator'>
        <hr />
      </div>

      {/* Post content. */}
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className={blogStyles.postContent}
      />

      <div className='page-separator'>
        <hr />
      </div>

      {/* Add comments section via Utterances. */}
      <div className={blogStyles.postComments}>
        <h2>Comments</h2>
        <Comment commentBox={commentBox} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  // Return a list of posts by locale.
  const paths = getAllPostIds(locales)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale, params }) {
  // Fetch a post data.
  const postData = await getPostData(params.id, locale)
  return {
    props: {
      postData,
    },
  }
}

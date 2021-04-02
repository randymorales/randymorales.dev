import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import React, { useEffect } from 'react'

import { CommentsRepo, DarkTheme, Name, Theme } from '@/lib/constants'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Comment from '@/components/Comment'
import Layout from '@/components/Layout'
import PublishedDate from '@/components/PublishedDate'

import blogStyles from '@/styles/blog.module.css'

export default function Post({ postData }) {
  const router = useRouter()
  const { locale } = router
  const commentBox = React.createRef()

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

  return (
    <Layout pageTitle={postData.title}>
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

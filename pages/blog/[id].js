import React, { useEffect } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import Date from '@/components/Date'
import Comment from '@/components/Comment'
import { getAllPostIds, getPostData } from '@/lib/posts'
import { CommentsRepo, DarkTheme, FullName, Theme } from '@/lib/constants'

import utilStyles from '@/styles/utils.module.css'

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
    <Layout>
      <Head>
        <title>
          {postData.title} | {FullName}
        </title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} locale={locale} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      {/* Add comments section via Utterances. */}
      <div>
        <div id='post-comments'>
          <h2>Comments</h2>
          <Comment commentBox={commentBox} />
        </div>
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

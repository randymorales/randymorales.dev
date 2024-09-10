import { createRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { CalendarIcon, ClockIcon, EyeIcon } from 'lucide-react'

import { CommentsRepo } from '@/lib/constants'
import Comment from '@/components/Comment'
import MDXComponents from '@/components/MDXComponents'
import PublishedDate from '@/components/PublishedDate'
import blogStyles from '@/styles/blog.module.css'

/* Includes:
  - Table of Contents
  - Content
  - Comment box
*/
export default function BlogPost({ postData, source }) {
  // Import prism highlighting for other languages because they are not
  // included by default.
  const prism = require('prismjs')
  require('prismjs/components/prism-bash')
  require('prismjs/components/prism-c')
  require('prismjs/components/prism-go')
  require('prismjs/components/prism-json')
  require('prismjs/components/prism-python')

  // Apply prism in all code blocks.
  useEffect(() => {
    prism.highlightAll()
  }, [])

  // Add comments script with Utterances.
  const commentBox = createRef()
  useEffect(() => {
    const commentScript = document.createElement('script')
    const theme = 'github-dark'
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
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
    <article>
      {/* Post title */}
      <h1 className='text-4xl md:text-5xl font-bold mb-6 text-titleColor'>
        {postData.title}
      </h1>

      {/* Post metadata */}
      <div className='flex justify-between items-center space-x-10 mb-6 text-lg'>
        <div className='flex items-center'>
          <EyeIcon className='w-4 h-4 mr-2' />
          <span>{postData.views} views</span>
        </div>
        <div className='flex items-center'>
          <CalendarIcon className='w-4 h-4 mr-2' />
          <span>
            <PublishedDate dateString={postData.date} />
          </span>
        </div>
        <div className='flex items-center'>
          <ClockIcon className='w-4 h-4 mr-2' />
          <span>{postData.readTime} min read</span>
        </div>
        <div className='flex items-center'>
          {postData.tags.split(',').map(tag => (
            <Link
              href={`/tags/${tag}/`}
              key={tag}
              className={[blogStyles.cardTag, tag].join(' ')}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* className='rounded-lg mb-6' */}
      <Image
        className={blogStyles.postImage}
        src={postData.image}
        alt='cover image'
        width={800}
        height={400}
        priority
      />

      {/* Post content using MDXRemote */}
      <div className={blogStyles.postContent}>
        <MDXRemote {...source} components={MDXComponents} />
      </div>

      {/* Add comments section via Utterances. */}
      <div className={blogStyles.postComments}>
        <h2>Comments</h2>
        <Comment commentBox={commentBox} />
      </div>
    </article>
  )
}

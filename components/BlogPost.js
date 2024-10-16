import { createRef, useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'

import { CommentsRepo } from '@/lib/constants'
import Comment from '@/components/Comment'
import MDXComponents from '@/components/MDXComponents'
import TableOfContents from '@/components/TableOfContents'
import BlogPostHeader from '@/components/BlogPostHeader'

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
    <div className='lg:mx-20 mx-10 px-4 sm:px-6 xl:px-20'>
      <article className='py-8 divide-y divide-gray-700'>
        <BlogPostHeader postData={postData} />

        {/* Table of Contents (mobile) */}
        <div className='xl:hidden mb-6'>
          <TableOfContents />
        </div>

        {/* Post content prose-xl prose-invert */}
        <div className='xl:grid xl:grid-cols-4 xl:gap-10'>
          <div className='xl:col-span-3'>
            <div className='darkBlogContent'>
              <MDXRemote {...source} components={MDXComponents} />
            </div>

            {/* Comments section */}
            <div className='pt-10'>
              <h2 className='text-2xl font-bold mb-4'>Comments</h2>
              <Comment commentBox={commentBox} />
            </div>
          </div>

          {/* Table of Contents (desktop) */}
          <div className='hidden xl:block'>
            <div className='sticky top-4'>
              <TableOfContents />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

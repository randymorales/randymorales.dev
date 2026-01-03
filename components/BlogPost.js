import { createRef, useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { format } from 'date-fns'

import { CommentsRepo, FullName } from '@/lib/constants'
import Comment from '@/components/Comment'
import MDXComponents from '@/components/MDXComponents'
import TableOfContents from '@/components/TableOfContents'
import Tag from '@/components/Tag'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPost({ postData, source }) {
  // Import prism highlighting for other languages
  const prism = require('prismjs')
  require('prismjs/components/prism-bash')
  require('prismjs/components/prism-c')
  require('prismjs/components/prism-go')
  require('prismjs/components/prism-json')
  require('prismjs/components/prism-python')

  // Apply prism in all code blocks
  useEffect(() => {
    prism.highlightAll()
  }, [])

  // Add comments script with Utterances (photon-dark theme)
  const commentBox = createRef()
  useEffect(() => {
    const commentScript = document.createElement('script')
    const theme = 'photon-dark'
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

  const tagsList = postData.tags.split(',')

  return (
    <div className='min-h-screen bg-zinc-900 flex flex-col'>
      <Header />

      <main id='main-content' className='flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full'>
        {/* Back button */}
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 text-zinc-300 hover:text-red-400 transition-colors mb-8'
        >
          <ArrowLeft size={20} aria-hidden='true' />
          <span>Back to Blog</span>
        </Link>

        {/* Post Header */}
        <article>
          {/* Title */}
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {postData.title}
          </h1>

          {/* Metadata */}
          <div className='flex flex-wrap items-center gap-4 text-sm text-zinc-300 mb-8'>
            {tagsList.length > 0 && (
              <div className='flex items-center gap-2'>
                <Tag tag={tagsList[0]} />
              </div>
            )}
            <div className='flex items-center gap-2'>
              <Calendar size={16} aria-hidden='true' />
              <span>{format(new Date(postData.date), 'MMMM dd, yyyy')}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock size={16} aria-hidden='true' />
              <span>{postData.readTime} min read</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content */}
            <div className='lg:col-span-8'>
              {/* Cover Image */}
              {postData.image && (
                <div className='relative w-full h-48 md:h-64 mb-12 rounded-xl overflow-hidden border border-zinc-800'>
                  <Image
                    src={postData.image}
                    alt={postData.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 896px'
                    className='object-cover'
                  />
                </div>
              )}
              {/* MDX Content */}
              <div className='prose prose-invert max-w-none'>
                <MDXRemote {...source} components={MDXComponents} />
              </div>

              {/* Author Info */}
              <div className='mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl'>
                <div className='flex items-center gap-2 mb-4'>
                  <User className='text-red-400' size={20} aria-hidden='true' />
                  <div className='text-lg font-bold text-white'>About the Author</div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-red-500'>
                    <Image
                      src='/images/profile.jpg'
                      alt={FullName}
                      fill
                      sizes='64px'
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <p className='text-white font-semibold'>{FullName}</p>
                    <p className='text-zinc-300 text-sm mt-1'>
                      Software Engineer passionate about cloud technologies, system design, and building scalable solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <Comment commentBox={commentBox} />
            </div>

            {/* Sidebar */}
            <aside className='lg:col-span-4'>
              <TableOfContents />
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

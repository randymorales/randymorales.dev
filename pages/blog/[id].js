import { useState, useEffect } from 'react'
import rehypeSlug from 'rehype-slug'
import { serialize } from 'next-mdx-remote/serialize'

import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
import { getAllPostIDs, getPostData } from '@/lib/posts'
import Layout from '@/components/Layout'
import BlogPost from '@/components/BlogPost'

export default function Post({ postData, source }) {
  const pageInfo = {
    url: SiteBaseURL + PostsDirectory + postData.id,
    title: postData.title,
    description: postData.description,
    image: postData.image,
    type: 'article',
  }

  // Get page views
  const [views, setViews] = useState(null)

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/page-views?post=${postData.id}`)
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error('Failed to fetch views:', error)
      }
    }

    fetchViews()
  }, [postData.id])

  postData.views = views

  return (
    <Layout pageInfo={pageInfo} large={false}>
      <BlogPost postData={postData} source={source}></BlogPost>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return the list of posts.
  const paths = getAllPostIDs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch post data.
  const postData = await getPostData(params.id)

  // Serialize the content for MDXRemote.
  const mdxSource = await serialize(postData.contentMD, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  })

  return {
    props: {
      postData,
      source: mdxSource,
    },
  }
}

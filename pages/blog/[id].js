import useSWR from 'swr'
import { serialize } from 'next-mdx-remote/serialize'

import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
import { getAllPostIds, getPostData } from '@/lib/posts'
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

  // Page views count
  const { data } = useSWR(
    `/api/page-views?post=${encodeURIComponent(PostsDirectory + postData.id)}`,
    async url => {
      const res = await fetch(url)
      return res.json()
    },
    { revalidateOnFocus: false },
  )
  postData.views = data?.pageViews

  return (
    <Layout pageInfo={pageInfo} large={false}>
      <BlogPost postData={postData} source={source}></BlogPost>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return the list of posts.
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch post data.
  const postData = await getPostData(params.id)

  // Serialize the content for MDXRemote.
  const mdxSource = await serialize(postData.contentHtml)

  return {
    props: {
      postData,
      source: mdxSource,
    },
  }
}

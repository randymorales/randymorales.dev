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

  return (
    <Layout pageInfo={pageInfo}>
      <BlogPost postData={postData} source={source} />
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

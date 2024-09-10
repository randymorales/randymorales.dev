import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
import { getAllPostTags, getPostsByTag } from '@/lib/posts'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import blogStyles from '@/styles/blog.module.css'

export default function TagIndex({ posts, tag }) {
  const pageInfo = {
    url: SiteBaseURL + `/tags/` + tag,
    title: `${tag} Tag`.toLowerCase(),
    description: `${tag} Tag`.toLowerCase(),
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <h2>
        Tag: <span className={blogStyles.tagPageData}>{`#${tag}`}</span>
      </h2>

      <h2>
        Posts: <span className={blogStyles.tagPageData}>{posts.length}</span>
      </h2>

      <div className='page-separator'>
        <hr />
      </div>

      <section className={blogStyles.cardsContainer}>
        {/* List blog posts */}
        {posts.map(({ id, title, description, date, tags, image }) => (
          <PostCard
            key={id}
            url={`${PostsDirectory}${id}`}
            title={title}
            description={description}
            date={date}
            tags={tags}
            image={image}
          />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of paths of posts by tag.
  const paths = getAllPostTags()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Return a list of posts by tag.
  const tag = params.tag
  const posts = await getPostsByTag(tag)
  return {
    props: {
      posts,
      tag,
    },
  }
}

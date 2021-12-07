import { useRouter } from 'next/router'

import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
import { getAllPostTags, getPostsByTag } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'

import blogStyles from '@/styles/blog.module.css'

export default function TagIndex({ posts, tag }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router
  const pageInfo = {
    url: SiteBaseURL + `/${locale}/tags/` + tag,
    title: `${tag} ${t('posts-tag')}`.toLowerCase(),
    description: `${tag} ${t('posts-tag')}`.toLowerCase(),
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <h2>
        {t('posts-tag')}:{' '}
        <span className={blogStyles.tagPageData}>{`#${tag}`}</span>
      </h2>

      <h2>
        {t('posts-found')}:{' '}
        <span className={blogStyles.tagPageData}>{posts.length}</span>
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

export async function getStaticPaths({ locales }) {
  // Return a list of paths of posts by tag and locale.
  const paths = getAllPostTags(locales)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale, params }) {
  // Return a list of posts by tag and locale.
  const posts = await getPostsByTag(params.tag, locale)
  const tag = params.tag
  return {
    props: {
      posts,
      tag,
    },
  }
}

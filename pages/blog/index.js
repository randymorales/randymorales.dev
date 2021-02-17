import { PostsDirectory } from '@/lib/constants'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'

import blogStyles from '@/styles/blog.module.css'

export default function BlogIndex({ allLocalePostsData }) {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('blog')}>
      <section className={blogStyles.cardsContainer}>
        {/* Blog posts list*/}
        {allLocalePostsData.map(
          ({ id, title, description, date, tags, image }) => (
            <PostCard
              url={`${PostsDirectory}${id}`}
              title={title}
              description={description}
              date={date}
              tags={tags}
              image={image}
            />
          ),
        )}
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  let allLocalePostsData = getSortedPostsData(locale)

  return {
    props: {
      allLocalePostsData,
    },
  }
}

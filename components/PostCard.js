import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'

import PublishedDate from '@/components/PublishedDate'

import blogStyles from '@/styles/blog.module.css'

export default function PostCard({
  url,
  title,
  description,
  date,
  tags,
  image,
}) {
  const router = useRouter()
  const { locale } = router
  const tagsList = tags.split(',')

  return (
    <article className={blogStyles.card}>
      <Image
        className={blogStyles.cardImg}
        src={image}
        alt=''
        width='400'
        height='200'
        priority
      />

      <div className={blogStyles.cardBody}>
        <div className={blogStyles.cardMetadata}>
          <div>
            {tagsList.map(tag => (
              <Link href={`/tags/${tag}/`} key={tag}>
                <a className={[blogStyles.cardTag, tag].join(' ')}>{tag}</a>
              </Link>
            ))}
          </div>
          <span className={blogStyles.cardDate}>
            <PublishedDate dateString={date} locale={locale} />
          </span>
        </div>

        <h2 className={blogStyles.cardTitle}>
          <Link href={url}>{title}</Link>
        </h2>

        <p className={blogStyles.cardDescription}>{description}</p>
      </div>
    </article>
  )
}

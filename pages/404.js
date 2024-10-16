import { NotFoundErrorCode, SiteBaseURL } from '@/lib/constants'
import Layout from '@/components/Layout'

import styles from '@/styles/404.module.css'

export default function Error404() {
  const pageInfo = {
    title: 'Error',
    description: 'Page Not Found',
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <div className={styles.box}>
        <h2>{NotFoundErrorCode}</h2>
        <p>{pageInfo.description}</p>
      </div>
    </Layout>
  )
}

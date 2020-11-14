import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Header from './Header'


const name = 'Randy Morales'
export const siteTitle = 'Randy Morales Blog Website'

export default function Layout({ children, home }) {

  return (
    <>
    <Header/>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>

    </>
  )
}

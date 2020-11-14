import Link from 'next/link'
import styles from '@styles/header.module.css'


export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>
            <Link href="/">
              <a>Randy Morales</a>
            </Link>
          </div>

          <div className={styles.navMenu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/posts">
              <a>Blog</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <button className={styles.switchTheme}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22 6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"></path>
                </g>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

import Link from 'next/link'

import navbarStyles from '@/styles/navbar.module.css'

export default function Header() {
  return (
    <header>
      <nav className={navbarStyles.nav}>
        <ul className={navbarStyles.menu}>
          <li>
            <div>
              <Link href='/'>Home</Link>
            </div>
          </li>
          <li>
            <div>
              <Link href='/blog'>Blog</Link>
            </div>
          </li>
          <li>
            <div>
              <Link href='/about'>About</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

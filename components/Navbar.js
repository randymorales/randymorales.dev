import Link from 'next/link'

import { useState } from 'react'

import LanguageSelector from '@/components/LanguageSelector'
import useTranslation from '@/i18n/useTranslation'
import {
  Nav,
  NavBar,
  LeftNav,
  RightNav,
  NavUl,
  NavList,
  Linkhref,
  MenuToggle,
  InputToggle,
  SpanToggle,
} from '@/components/NavbarStyled'

export default function Navbar() {
  const [toggle, setToggle] = useState({ mode: 'no_slide' })
  const { t } = useTranslation()

  return (
    <Nav>
      <NavBar>
        <LeftNav>
          <h1>
            {' '}
            <a href='/'> Randy </a>
          </h1>
        </LeftNav>

        <MenuToggle>
          <InputToggle
            type='checkbox'
            onClick={() =>
              setToggle(
                toggle.mode === 'slide'
                  ? { mode: 'no_slide' }
                  : { mode: 'slide' },
              )
            }
          />
          <SpanToggle></SpanToggle>
          <SpanToggle></SpanToggle>
          <SpanToggle></SpanToggle>
        </MenuToggle>

        <RightNav slide={toggle}>
          <NavUl>
            <NavList>
              <Linkhref>
                <Link href='/'>
                  <a>{t('home')}</a>
                </Link>
              </Linkhref>
            </NavList>
            <NavList>
              <Linkhref>
                <Link href='/blog'>
                  <a>{t('blog')}</a>
                </Link>
              </Linkhref>
            </NavList>
            <NavList>
              <Linkhref>
                <Link href='/about'>
                  <a>{t('about')}</a>
                </Link>
              </Linkhref>
            </NavList>
            <NavList>
              <LanguageSelector />
            </NavList>
          </NavUl>
        </RightNav>
      </NavBar>
    </Nav>
  )
}

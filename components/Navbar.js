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
            <Link href='/'>Randy</Link>
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
                <Link href='/'>{t('home')}</Link>
              </Linkhref>
            </NavList>
            <NavList>
              <Linkhref>
                <Link href='/blog'>{t('blog')}</Link>
              </Linkhref>
            </NavList>
            <NavList>
              <Linkhref>
                <Link href='/about'>{t('about')}</Link>
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

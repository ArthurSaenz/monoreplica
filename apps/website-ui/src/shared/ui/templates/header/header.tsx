import { useState } from 'react'

import { scrollLock } from '@monorepo/web-toolkit'

import { isSSR } from '#root/shared/lib/ssr'

import * as analytics from './analytics'
import { HamburgerContent } from './hamburger-content'
import { HeaderView, HeaderViewProps } from './header-view'
import { getMenuItems } from './menu-items'

export interface HeaderProps {
  options: {
    title: string
    to: string
    search?: Record<string, unknown>
    icon: string
    eventName: string
  }[]
  onShare?: () => void
  appearance?: HeaderViewProps['appearance']
  onBack?: () => void
  logoHref?: string
}

export const Header = (props: HeaderProps) => {
  const { appearance = 'default', onBack, onShare, options, logoHref } = props

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => {
      const newValue = !prev

      if (newValue) {
        scrollLock.disablePageScroll()
        analytics.hamburgerMenuIconClicked()
      } else {
        scrollLock.enablePageScroll()
      }

      return newValue
    })
  }

  const mobileAppVersion = isSSR ? null : (window._app?.versionApp as string) || null

  return (
    <>
      <HeaderView
        logoHref={logoHref}
        appearance={appearance}
        onBack={onBack}
        onShare={onShare}
        onClickSearch={noop}
        onClickMenu={toggleOpen}
        onClickAccount={noop}
      />
      <HamburgerContent
        isOpen={isOpen}
        menuItems={getMenuItems(options)}
        onClick={toggleOpen}
        onClose={toggleOpen}
        mobileAppVersion={mobileAppVersion}
      />
    </>
  )
}

const noop = () => {}

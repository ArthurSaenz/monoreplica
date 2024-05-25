import clsx from 'clsx'
import { useState } from 'react'

import { scrollLock } from '@monorepo/web-toolkit'

import { Link } from '#root/shared/ui/atoms/link'

import * as analytics from './analytics'
import styles from './hamburger-content.module.scss'
import { SvgIconClose } from './icons'
import { MenuItem } from './types'

export interface THamburgerContentProps {
  onClick?: (name?: string) => void
  onClose: () => void
  menuItems: MenuItem[]
  isOpen: boolean
  mobileAppVersion?: string | null
}

export const HamburgerContent = (props: THamburgerContentProps) => {
  const { isOpen, onClose, onClick, menuItems, mobileAppVersion } = props
  const [isFirstRender, setIsFirstRender] = useState(true)

  return (
    (!isFirstRender || isOpen) && (
      <nav className={clsx(styles.root, isOpen ? styles.open : styles.closed)}>
        <div className={styles.scroll} data-scroll-lock-scrollable>
          <div className={styles['wrap-btn']}>
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                setIsFirstRender(false)
                onClose()
                scrollLock.enablePageScroll()
              }}
              aria-label="Close"
            >
              <SvgIconClose />
            </button>
          </div>
          <div className={styles.content}>
            {menuItems.map((item) => (
              <Link
                // tabIndex={0}
                className={styles.link}
                key={item.to}
                to={item.to}
                search={item.search}
                isExternal={item.isExternal}
                onClick={() => {
                  setIsFirstRender(false)
                  onClick?.(item.id)
                  if (item.eventName) {
                    analytics.mobileDrawerRefClicked({ action: item.eventName, target: item.to })
                  }
                  scrollLock.enablePageScroll()
                }}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}

            {mobileAppVersion && <div className={styles.version}>{`v${mobileAppVersion}`}</div>}
          </div>
        </div>
      </nav>
    )
  )
}

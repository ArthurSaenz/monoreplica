import clsx from 'clsx'

import { Branch } from '@monorepo/web-toolkit'

import { Link } from '#root/shared/ui/atoms/link'

import * as analytics from './analytics'
import styles from './header-view.module.scss'
import {
  SvgIconBack,
  SvgIconHamburgerMenu,
  SvgIconShare, // SvgIconSearch,
} from './icons'

export interface HeaderViewProps {
  onClickSearch?: () => void
  onClickMenu?: () => void
  onClickAccount?: () => void
  onBack?: () => void
  onShare?: () => void
  logoHref?: string
  appearance?: 'primary' | 'default'
}

export const HeaderView = (props: HeaderViewProps) => {
  const { onClickMenu, onClickAccount, onClickSearch, appearance = 'default', onBack, onShare, logoHref } = props

  const view = {
    default: <HeaderDefault onClickMenu={onClickMenu} onClickAccount={onClickAccount} onClickSearch={onClickSearch} />,
    primary: <HeaderSecondary logoHref={logoHref} onShare={onShare} onBack={onBack} onClickMenu={onClickMenu} />,
  }

  return view[appearance]
}

export const HeaderDefault = (props: HeaderViewProps) => {
  const { onClickMenu } = props

  return (
    <header className={styles.root}>
      <div className={styles['wrap-start']}>
        <button type="button" className={styles.button} onClick={onClickMenu}>
          <SvgIconHamburgerMenu />
        </button>
      </div>

      <Link to="/" className={styles.logo} onClick={analytics.logoClicked}>
        <img src="/assets/images/logo-header.svg" alt="Logo" />
      </Link>

      <div className={styles['wrap-end']}>
        {/* <button type="button" className={styles.button} onClick={onClickAccount} aria-label="Account">
          <SvgIconAccount />
        </button> */}
        {/* <button type="button" className={styles.button} onClick={onClickSearch} aria-label="Search">
          <SvgIconSearch />
        </button> */}
      </div>
    </header>
  )
}

export const HeaderSecondary = (props: HeaderViewProps) => {
  const { onBack, onClickMenu, onShare, logoHref } = props

  return (
    <header className={clsx(styles.root, styles[`root--secondary`])}>
      <div className={clsx(styles['wrap-start'], styles.mobile)}>
        <button type="button" className={styles.button} onClick={onBack} aria-label="Search">
          <SvgIconBack />
        </button>
      </div>

      <div className={clsx(styles['wrap-start'], styles.desktop)}>
        <button type="button" className={styles.button} onClick={onClickMenu}>
          <SvgIconHamburgerMenu />
        </button>
      </div>

      <Branch if={Boolean(logoHref)}>
        <Link to={logoHref} className={styles.logo} onClick={analytics.logoClicked}>
          <img src="/assets/images/logo-header.svg" alt="Logo" />
        </Link>

        <div className={clsx(styles.logo, styles['logo--unclickable'])}>
          <img src="/assets/images/logo-header.svg" alt="Logo" />
        </div>
      </Branch>

      {onShare && (
        <div className={styles['wrap-end']}>
          <button type="button" className={styles.button} onClick={onShare}>
            <SvgIconShare className={styles['icon--small']} />
          </button>
        </div>
      )}
    </header>
  )
}

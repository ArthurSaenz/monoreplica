import clsx from 'clsx'

import styles from './page-status-layout.module.scss'

export interface PageStatusLayoutProps {
  children: React.ReactNode
  theme: 'default' | 'primary'
  headerView: React.ReactNode
}

export const PageStatusLayout = (props: PageStatusLayoutProps) => {
  const { children, theme = 'default', headerView } = props

  return (
    <>
      {headerView}
      <div className={clsx(styles.root, styles[`root--${theme}`])}>
        <main className={styles.container}>{children}</main>
      </div>
    </>
  )
}

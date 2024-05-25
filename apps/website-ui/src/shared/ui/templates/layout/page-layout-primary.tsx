import clsx from 'clsx'

import styles from './page-layout-primary.module.scss'

export interface PageLayoutPrimaryProps {
  main: React.ReactNode
  header?: React.ReactNode
  sidebar: React.ReactNode
  navigation: React.ReactNode
  activeCategoryColor?: string
  appearance?: 'shows-details' | 'flights-details' | 'hotels-details'
}

export const PageLayoutPrimary = (props: PageLayoutPrimaryProps) => {
  const { header, main, sidebar, navigation, activeCategoryColor, appearance } = props

  return (
    <div
      className={clsx(styles['root-primary'], styles['background-default'])}
      {...(activeCategoryColor && { style: { '--active-category-color': activeCategoryColor } })}
    >
      <div className={styles.navigation}>{navigation}</div>
      <div className={clsx(styles.container, appearance && styles[`container--${appearance}`])}>
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.main}>{main}</div>
        <div className={styles.sidebar}>{sidebar}</div>
      </div>
    </div>
  )
}

/* eslint-disable react/no-array-index-key */
import { EAnalyticsCategory, gtm } from '#root/core/analytics'

import { Link } from '#root/shared/ui/atoms/link'

import styles from './footer.module.scss'

export interface FooterProps {
  options: { title: string; to: string; search?: Record<string, unknown>; isExternal?: boolean; eventName?: string }[]
}

export const Footer = (props: FooterProps) => {
  const { options } = props

  return (
    <footer className={styles.root}>
      <Link to="/">
        <img src="/assets/images/logo-header.svg" alt="Logo" />
      </Link>
      <div>
        {options.map((item, index) => (
          <Link
            key={item.to + index}
            to={item.to}
            search={item.search}
            isExternal={item.isExternal}
            onClick={() => item.eventName && footerRefClicked(item.eventName)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </footer>
  )
}

const footerRefClicked = (eventName: string) => {
  gtm.pushEvent({
    event: 'interaction',
    category: EAnalyticsCategory.Layout,
    action: 'Footer link clicked',
    label: eventName,
  })
}

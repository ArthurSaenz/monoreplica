import { usePageContext } from '#root/app/page-context'
import { EAnalyticsCategory, gtm } from '#root/core/analytics'
import { useEffect } from 'react'

import { paths } from '#root/shared/lib/paths'
import { Button } from '#root/shared/ui/atoms/button'

import styles from './error.module.scss'

interface ErrorPageProps {
  errorTitle?: string
  errorDescription?: string
}

export const Page = (props: ErrorPageProps) => {
  const { errorTitle, errorDescription } = props

  const { is404 } = usePageContext()

  let title = errorTitle
  let description = errorDescription
  let subtitle = ''
  let imgSrc = '/assets/images/moskit-error.svg'

  useEffect(() => {
    pageNotFoundEvent(window.location.href, is404)
  }, [is404])

  const navigateToTheHomePage = () => {
    window.location.assign(paths.home())
  }

  if (is404) {
    title = title || '404'
    description = description || T.pageNotFound
    subtitle = 'Houston, we have a problem'
    imgSrc = '/assets/images/moskit-404.svg'
  }

  title = title || 'OOPPPSSS'
  description = description || T.oopsSometimesHappened

  return (
    <>
      <div className={styles.root}>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        <h1 className={styles.title}>{title}</h1>
        <img src={imgSrc} className={styles.image} alt={title} />
        <div className={styles.text}>{description}</div>
        <Button appearance="default" onClick={navigateToTheHomePage} icon="arrow" sizes="large">
          {T.backToTheHomePageButton}
        </Button>
      </div>
    </>
  )
}

const T = {
  backToTheHomePageButton: 'Back to the home page',
  oopsSometimesHappened: 'Oops, sometimes it happens',
  pageNotFound: 'Page not found',
}

const pageNotFoundEvent = (url: string, is404: boolean | null | undefined) => {
  gtm.pushEvent({
    event: 'interaction',
    category: EAnalyticsCategory.Common,
    action: is404 ? 'Page not found' : 'Page error',
    label: url,
  })
}

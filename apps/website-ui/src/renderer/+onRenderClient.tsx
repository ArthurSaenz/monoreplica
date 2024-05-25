import {
  getCanonicalUrl,
  getJsonLds,
  getPageMetaDescription,
  getPageTitle,
  isNeedToChangeTitleAndDescription,
} from '#root/app/page-meta'
import { Platform, modelDebug } from '#root/core/debug'
import { updateCanonical, updateJsonLdHead, updateMetaTag } from '#root/core/jsonld'
import ReactDOM from 'react-dom/client'
import { navigate } from 'vike/client/router'
import { OnRenderClientAsync } from 'vike/types'

import { isSSR } from '#root/shared/lib/ssr'

import { ErrorBoundary, initMetric } from './monitoring'
import { Root } from './root'

let isMobile = false
if (!isSSR) {
  isMobile = window.matchMedia('(max-width: 930px)').matches
}

const initDebugInfo = {
  platform: isMobile ? Platform.MobileWeb : Platform.Desktop,
  osVersion: '',
  appVersion: '',
}

initMetric(initDebugInfo)

let root: ReactDOM.Root
export const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page } = pageContext

  const router = {
    navigate,
    pathname: pageContext.urlParsed.pathname,
    search: pageContext.urlParsed.search,
  }

  const context = { ...pageContext, router }

  const page = (
    <ErrorBoundary>
      <>
        <Root pageContext={context} initialStoresValues={[[modelDebug.$debugInfo, initDebugInfo]]}>
          <Page />
        </Root>
      </>
    </ErrorBoundary>
  )

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const container = document.querySelector('#page-view')!

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)

    if (isNeedToChangeTitleAndDescription(pageContext)) {
      const title = getPageTitle(pageContext)
      const metaDescription = getPageMetaDescription(pageContext)

      if (title) {
        document.title = title
      }

      if (metaDescription) {
        updateMetaTag('description', metaDescription)
      }
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)

    const title = getPageTitle(pageContext)
    const metaDescription = getPageMetaDescription(pageContext)
    const jsonLd = getJsonLds(pageContext)
    const canonicalUrl = getCanonicalUrl(pageContext)
    // const metaKeywords = getMetaKeywords(pageContext)

    if (title) document.title = title
    if (metaDescription) updateMetaTag('description', metaDescription)

    updateJsonLdHead(jsonLd)
    updateCanonical(canonicalUrl || pageContext.urlOriginal)
    // updateMetaTag('keywords', metaKeywords)
  }
}

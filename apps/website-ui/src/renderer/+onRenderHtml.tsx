import { getCanonicalUrl, getJsonLds, getPageMetaDescription, getPageTitle } from '#root/app/page-meta'
import { gtmNoScript } from '#root/core/analytics'
import { jsonLdScriptInterpolate } from '#root/core/jsonld'
import { renderToString } from 'react-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import { OnRenderHtmlAsync } from 'vike/types'

import { isDevEnv, isLocalEnv } from '#root/shared/lib/ssr'

import { Root } from './root'

export const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext

  let pageHtml = ''

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!Page) {
    // SPA
    pageHtml = ''
  } else {
    // Prerender
    const router = {
      navigate: noop,
      pathname: pageContext.urlParsed.pathname,
      search: pageContext.urlParsed.search,
    }

    const context = { ...pageContext, router }

    pageHtml = await renderToString(
      <>
        <Root pageContext={context} initialStoresValues={[]}>
          <Page />
        </Root>
      </>,
    )
  }

  const title = getPageTitle(pageContext)
  const metaDescription = getPageMetaDescription(pageContext)
  const jsonLds = getJsonLds(pageContext)
  const canonicalUrl = getCanonicalUrl(pageContext)
  // const metaKeywords = getMetaKeywords(pageContext)

  const isDisallowRobots = process.env.ROBOTS_FILE === 'disallow'

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />

      <title>${title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="theme-color" content="#f75064" />

      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />

      <link rel="preload" href="/assets/fonts/Pauza-Thin.woff2" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Pauza-Light.woff2" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Pauza-Medium.woff2" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Pauza-Regular.woff2" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Pauza-Bold.woff2" as="font" crossOrigin="" />
      <link rel="preload" href="/assets/fonts/Pauza-Black.woff2" as="font" crossOrigin="" />
      
      <meta property="og:site_name" content="{{projectName}}" />

      ${dangerouslySkipEscape(metaDescription ? `<meta name="description" content="${metaDescription}" />` : '')}
      ${dangerouslySkipEscape(isDisallowRobots ? '<meta name="robots" content="noindex, nofollow" />' : '')}
      ${dangerouslySkipEscape(
        // INFO: default URL if canonical does not exist
        canonicalUrl
          ? `<link rel="canonical" href="https://{{projectName}}${canonicalUrl || pageContext.urlParsed.pathname}" />`
          : '',
      )}
      ${dangerouslySkipEscape(
        jsonLds && jsonLds.length > 0
          ? `<script type="application/ld+json">${jsonLdScriptInterpolate(jsonLds)}</script>`
          : '',
      )}   

    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      <div id="modal-root"></div>
      <div id="mobile-root"></div>
      <div id="ads-sticky"></div>

      ${dangerouslySkipEscape(gtmNoScript())}
      ${dangerouslySkipEscape(
        isLocalEnv || isDevEnv ? `<script src="https://unpkg.com/react-render-tracker"></script>` : '',
      )}
    </body>
  </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    },
  }
}

const noop = () => {}

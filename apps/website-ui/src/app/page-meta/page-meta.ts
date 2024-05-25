import type { PageContext } from 'vike/types'

import { paths } from '#root/shared/lib/paths'

import { getMetaDescriptionFromConfig, getTitleFromConfig } from './utils'

const defaultMetaTitle = '{{projectName}}'
const defaultMetaDescription = ''
const defaultMetaKeywords = ''

export function getPageTitle(pageContext: PageContext): string {
  const title =
    // For dynamic prerender (defined in the return object in +data.ts)
    pageContext.data?.documentProps?.title ||
    // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+title.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    getTitleFromConfig(pageContext) ||
    defaultMetaTitle

  return title
}

export function getPageMetaDescription(pageContext: PageContext): string {
  const description =
    // For dynamic prerender (defined in the return object in +data.ts)
    pageContext.data?.documentProps?.metaDescription ||
    // Title defined statically by /pages/some-page/+description.js (or by `export default { description }` in /pages/some-page/+description.js)
    // The setting 'pageContext.config.description' is a custom setting we defined at ./+config.ts
    getMetaDescriptionFromConfig(pageContext) ||
    defaultMetaDescription

  return description
}

export function getMetaKeywords(pageContext: PageContext): string {
  const keywords = pageContext.data?.documentProps?.metaKeywords || defaultMetaKeywords

  return keywords
}

export function getCanonicalUrl(pageContext: PageContext): string {
  const canonicalUrl = pageContext.data?.documentProps?.canonicalUrl || ''

  return canonicalUrl
}

export function getJsonLds(pageContext: PageContext): unknown[] | null {
  const jsonLd = pageContext.data?.documentProps?.jsonLds || null

  return jsonLd
}

/**
 * Only for dynamic product page and confirmation page we have to change the title and meta description
 */
export const isNeedToChangeTitleAndDescription = (pageContext?: PageContext) => {
  return (
    pageContext?.urlParsed &&
    (pageContext.urlParsed.pathname === paths.productItem() ||
      pageContext.urlParsed.pathname === paths.categoriesItem())
  )
}

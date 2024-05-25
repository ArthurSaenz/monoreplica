/**
 * @example
 * user: (username = ':username') => `/user/${username}`,
 */
const websitePaths = {
  home: () => '/',
  categoriesItem: (params) => getPathWithParams('/categories', params),
  productItem: (params) => getPathWithParams('/product', params),
  accessibilityStatement: () => '/accessibility_statement',
  aboutCompany: () => '/about',
  customerArea: () => '/customer-area',
  termsConditions: () => '/terms-and-conditions',
  faq: () => '/faq',
}

const getPathWithParams = (path, params) => {
  if (params) {
    const searchParams = new URLSearchParams()

    for (const property in params) {
      searchParams.set(property, params[property])
    }

    return path + '?' + searchParams.toString()
  }

  return path
}

/**
 * Used for sitemap.xml
 *
 * @see /apps/website-ui/scripts/sitemap.mjs
 */
export const sitemapLinks = [
  // websitePaths.categoriesItem(),
  // websitePaths.customerArea(),
  websitePaths.aboutCompany(),
  websitePaths.termsConditions(),
  websitePaths.accessibilityStatement(),
  websitePaths.faq(),
]

export const paths = {
  ...websitePaths,
}

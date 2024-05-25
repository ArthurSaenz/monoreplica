import { usePageContext } from '#root/app/page-context'
import queryString from 'query-string'
import { navigate as navigateOrigin } from 'vike/client/router'

import { isSSR } from '#root/shared/lib/ssr'

import type { NavigateOptions } from './types'

export const navigateFn = async (args: NavigateOptions) => {
  const { to, search, replace } = args

  const href =
    to +
    (search && Object.keys(search).length > 0
      ? '?' + queryString.stringify(search, { encode: false, arrayFormat: 'bracket-separator' })
      : '')

  await navigateOrigin(href, replace ? { overwriteLastHistoryEntry: true } : undefined)
}

export const useRouter = (): {
  pathname: string
  search: Record<string, string>
  // routeParams?: Record<string, string>
  searchOriginal: string | null
  navigate: typeof navigateFn
  isClientSideNavigation?: boolean
  history: History
} => {
  const pageContext = usePageContext()

  return {
    pathname: pageContext.urlParsed.pathname,
    search: pageContext.urlParsed.search,
    searchOriginal: pageContext.urlParsed.searchOriginal,
    navigate: navigateFn,
    isClientSideNavigation: pageContext.isClientSideNavigation,
    history: isSSR ? (undefined as unknown as History) : window.history,
  }
}

export { navigateFn as navigate }

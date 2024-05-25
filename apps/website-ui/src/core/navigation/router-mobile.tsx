import { router } from '#root/renderer-spa/router'
import { RouterHistory, useRouterState, useRouter as useRouterTanStack, useSearch } from '@tanstack/react-router'

import type { NavigateOptions } from './types'

export const navigate = async (args: NavigateOptions) => {
  const { to, search, replace } = args

  await router.navigate({ to, search, replace })
}

export const useRouter = (): {
  pathname: string
  search: Record<string, string>
  // routeParams?: Record<string, string>
  navigate: typeof navigate
  searchOriginal: string | null
  isClientSideNavigation?: boolean
  history: RouterHistory
} => {
  const search = useSearch({
    strict: false,
  })

  const router = useRouterTanStack()

  const selected = useRouterState({
    select: (state) => state.location,
  })

  return {
    pathname: 'pageContext.urlParsed.pathname',
    search,
    // routeParams: pageContext.routeParams, // NOT used
    searchOriginal: selected.searchStr,
    navigate,
    isClientSideNavigation: undefined, // NOT used, only for consistent types
    history: router.history,
  }
}

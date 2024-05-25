import { resolveRoute } from 'vike/routing'
import type { RouteSync } from 'vike/types'

import { paths } from '#root/shared/lib/paths'

import { categoriesPrerenderUrlList } from './content'

export const route: RouteSync = (pageContext: { urlPathname: string }): ReturnType<RouteSync> => {
  if (categoriesPrerenderUrlList.includes(pageContext.urlPathname)) {
    const id = pageContext.urlPathname.replace('/', '')

    return { routeParams: { id } }
  }

  return resolveRoute(paths.categoriesItem(), pageContext.urlPathname)
}

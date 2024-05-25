import type { PageContextServer } from 'vike/types'

import { categoriesDataMeta } from './content'

export const data = async (pageContext?: PageContextServer) => {
  const { id } = pageContext?.routeParams || {}

  const categoryId = id as 'flights' | 'domestic' | 'shows' | undefined

  return {
    pageProps: {
      id,
      pageTitle: T.pageTitle,
      pageSubtitle: T.pageSubtitle,

      // INFO: used on client side render by categoryId
      dynamicHeadData: {
        ...categoriesDataMeta,
      },
    },
    documentProps: {
      title: categoryId ? categoriesDataMeta[categoryId].title : '',
      metaDescription: categoryId ? categoriesDataMeta[categoryId].metaDescription : '',
      jsonLds: [],
    },
  }
}

export type Data = Awaited<ReturnType<typeof data>>

const T = {
  pageTitle: 'Page title',
  pageSubtitle: 'Page subtitle',
}

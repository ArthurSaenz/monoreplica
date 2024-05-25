import type { PageContextServer } from 'vike/types'

import { productDataMeta } from './content'

export const data = async (_pageContext: PageContextServer) => {
  // const { id } = pageContext.routeParams

  return {
    pageProps: {
      // INFO: used on client side render by categoryId
      dynamicHeadData: {
        ...productDataMeta,
      },
    },
    documentProps: {
      jsonLds: [],
    },
  }
}

export type Data = Awaited<ReturnType<typeof data>>

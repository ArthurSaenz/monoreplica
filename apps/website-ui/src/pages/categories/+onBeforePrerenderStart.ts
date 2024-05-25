import { paths } from '#root/shared/lib/paths'

import { categoriesPrerenderUrlList } from './content'

export const onBeforePrerenderStart = async () => {
  const categoriesUrls = [paths.categoriesItem(), ...categoriesPrerenderUrlList]

  return categoriesUrls
}

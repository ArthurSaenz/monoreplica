import categoriesDataManifest from '../../../data/categories-data-manifest.json'
import categoriesDataMeta from '../../../data/categories-data-meta.json'

export const categoriesPrerenderUrlList = categoriesDataManifest.raw.categories
  .filter((item) => !item.link.includes('id='))
  .map((item) => item.link)

export { categoriesDataMeta }

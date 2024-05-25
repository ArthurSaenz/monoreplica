import { BreadcrumbList, WithContext } from 'schema-dts'

import { TItemListElements } from './types'

export interface BreadCrumbJsonLdProps {
  itemListElements: TItemListElements[]
}

/**
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 * @see https://jsonld.com/breadcrumb
 */
export function jsonLdBreadCrumbs({ itemListElements = [] }: BreadCrumbJsonLdProps): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: setItemListElements(itemListElements) as BreadcrumbList['itemListElement'],
  }
}

export function setItemListElements(items: TItemListElements[]) {
  if (items.length > 0) {
    return items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.item,
        name: item.name,
      },
    }))
  }

  return undefined
}

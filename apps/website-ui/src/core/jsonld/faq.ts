import { FAQPage, WithContext } from 'schema-dts'

export interface JsonLdFaqArgs {
  mainEntity: { name: string; text: string }[]
}

/**
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 * @see https://www.seocomponent.com/schema-markup-generator/faq-page/
 */
export function jsonLdFaq({ mainEntity }: JsonLdFaqArgs): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity.map((element) => ({
      '@type': 'Question',
      name: element.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: element.text,
      },
    })),
  }
}

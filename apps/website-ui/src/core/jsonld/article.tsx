interface JsonLdArticleArgs {
  headline: string
  imageUrl: string
}

/**
 *
 * @see https://developers.google.com/search/docs/data-types/article
 */
export function jsonLdArticle(args: JsonLdArticleArgs) {
  const { headline, imageUrl } = args

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    image: [imageUrl],
    datePublished: '2023-06-01T08:00:00+08:00',
    dateModified: '2023-06-01T09:20:00+08:00',
    // author: [
    //   {
    //     '@type': 'Person',
    //     name: 'Jane Doe',
    //     url: 'https://example.com/profile/janedoe123',
    //   },
    // ],
  }
}

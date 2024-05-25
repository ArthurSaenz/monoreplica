/**
 * @see https://developers.google.com/search/docs/appearance/structured-data/logo
 * @see https://jsonld.com/organization/
 */
export function jsonLdLogo() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://{{projectName}}',
    logo: 'https://{{projectName}}/assets/images/logo-header.svg',
  }
}

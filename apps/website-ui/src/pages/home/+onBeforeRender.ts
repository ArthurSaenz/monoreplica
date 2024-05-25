import { jsonLdLogo } from '#root/core/jsonld'

export const onBeforeRender = async () => {
  return {
    pageContext: {
      pageProps: {},
      documentProps: {
        jsonLds: [jsonLdLogo()],
        canonicalUrl: '/',
      },
    },
  }
}

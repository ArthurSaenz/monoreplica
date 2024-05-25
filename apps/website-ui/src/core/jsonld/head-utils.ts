import { jsonLdScriptInterpolate } from './jsonld'

export const updateMetaTag = (type: string, content: string) => {
  const headElement = document.head

  headElement.querySelector(`meta[name="${type}"]`)?.setAttribute('content', content)
}

export const updateCanonical = (href: string) => {
  const headElement = document.head

  const canonical = headElement.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (canonical) {
    canonical.href = `https://{{projectName}}${href}`
  }
}

export const updateJsonLdHead = (content: unknown) => {
  const headElement = document.head

  const script = headElement.querySelector('script[type="application/ld+json"]')

  if (script) {
    if (content) {
      script.innerHTML = jsonLdScriptInterpolate(content)
    } else {
      headElement.removeChild(script)
    }
  } else if (content) {
    const script = document.createElement('script')

    script.setAttribute('type', 'application/ld+json')

    script.innerHTML = jsonLdScriptInterpolate(content)

    document.head.appendChild(script)
  }
}

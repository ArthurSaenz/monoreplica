// import type { Thing, WithContext } from 'schema-dts'
import { TJsonLdOptions } from './types'
import { safeJsonLdReplacer } from './utils'

/**
 * Component that inline-includes a JSON-LD script where specified.
 *
 * For Example:
 *
 * ```tsx
 * <JsonLd
 *   items={{
 *     "@context": "https://schema.org",
 *     "@type": "Person",
 *     name: "Grace Hopper",
 *     alternateName: "Grace Brewster Murray Hopper",
 *     alumniOf: {
 *       "@type": "CollegeOrUniversity",
 *       name: ["Yale University", "Vassar College"]
 *     },
 *     knowsAbout: ["Compilers", "Computer Science"]
 *   }}
 *   space={2}
 * />
 * ```
 * @see https://github.com/google/react-schemaorg
 */
export const JsonLd = (props: TJsonLdOptions & { items: unknown }) => {
  const { items } = props

  return <script {...jsonLdScriptProps(items, props)} />
}

/**
 * Produces necessary props for a JSX <script> tag that includes JSON-LD.
 *
 * Can be used by spreading the props into a <script> JSX tag:
 *
 * ```tsx
 * <script {...jsonLdScriptProps({
 *   "@context": "https://schema.org",
 *   "@type": "Person",
 *   name: "Grace Hopper",
 *   alternateName: "Grace Brewster Murray Hopper",
 *   alumniOf: {
 *     "@type": "CollegeOrUniversity",
 *     name: ["Yale University", "Vassar College"]
 *   },
 *   knowsAbout: ["Compilers", "Computer Science"]
 * })} />
 * ```
 */
export const jsonLdScriptProps = (items: unknown, options: TJsonLdOptions = {}): JSX.IntrinsicElements['script'] => {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(items, safeJsonLdReplacer, options.space),
    },
  }
}

export const jsonLdScriptInterpolate = (items: unknown, options: TJsonLdOptions = {}) =>
  JSON.stringify(items, safeJsonLdReplacer, options.space)

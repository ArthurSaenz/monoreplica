/* eslint-disable @typescript-eslint/no-namespace */
type Page = (pageProps: PageProps) => React.ReactElement

export type PageProps = Record<string, unknown>

// The documentProps can be defined in three places: 1. onBeforeRender function. 2. export some field from `.page.js`. 3. export whole object in `.page.js`.
export interface DocumentProps {
  title: string
  metaDescription?: string
  metaKeywords?: string
  canonicalUrl?: string
  jsonLds?: unknown[]
}

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      /** The page's root React component */
      Page: Page

      data?: {
        pageProps: PageProps
        // data() can return a `documentProps` object in +data.ts
        documentProps?: DocumentProps
      }
      config: {
        /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string
        /** Value for <meta name="description"> defined statically */
        description?: string
        /** A component, usually common to several pages, that wraps the root component `Page` */
        Layout?: (props: { children: React.ReactNode }) => JSX.Element
      }
      /** https://vike.dev/render */
      abortReason?: string

      debugInfo?: {
        version: string
      }
    }
  }
}

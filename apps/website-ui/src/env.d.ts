// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DOMAIN_ENV: 'dev' | 'stage' | 'prod' | undefined
  readonly VITE_MOBILE_APP: 'true'
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'react' {
  // augment CSSProperties here
  interface CSSProperties {
    '--active-category-color'?: string
  }
}

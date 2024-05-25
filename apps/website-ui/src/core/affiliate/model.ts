import { EAnalyticsCategory, gtm } from '#root/core/analytics'
import { atom } from 'jotai'

import { ls } from '@monorepo/web-toolkit'

import { isSSR } from '#root/shared/lib/ssr'

const trafficSourceBreakdownPerAffiliate = (args: { affiliateCode: string; pathname: string }) => {
  const { affiliateCode, pathname } = args

  gtm.pushEvent({
    event: 'interaction',
    category: EAnalyticsCategory.Other,
    action: 'Traffic source breakdown per affiliate',
    affiliateCode,
    pathname,
  })
}

const AFFILIATE_CODE = 'AFFILIATE_CODE'
const AFFILIATE_CODE_TTL = 60 * 60 * 24 * 14 // 14 days

export const fldSiteCodeGet = (): string | null => {
  return ls.get(AFFILIATE_CODE)
}

const fldSiteCodeSet = (value: string | number, ttl: number) => {
  ls.set(AFFILIATE_CODE, value, ttl)
}

export const fldSiteCodeClear = () => {
  ls.remove(AFFILIATE_CODE)
}

let initialAffiliateCode = ''

if (!isSSR) {
  const affiliateCode = new URLSearchParams(window.location.search).get('utm_source')
  const currentAffiliateCode = fldSiteCodeGet()

  if (affiliateCode && !currentAffiliateCode) {
    fldSiteCodeSet(affiliateCode, AFFILIATE_CODE_TTL)
    initialAffiliateCode = affiliateCode

    trafficSourceBreakdownPerAffiliate({
      affiliateCode,
      pathname: window.location.pathname,
    })
  } else if (currentAffiliateCode && !affiliateCode) {
    initialAffiliateCode = currentAffiliateCode
  }
}

export const $affiliateCode = atom<string | null>(initialAffiliateCode)

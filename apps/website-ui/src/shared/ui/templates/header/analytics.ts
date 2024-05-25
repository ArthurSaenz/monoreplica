import { EAnalyticsCategory, gtm } from '#root/core/analytics'

export const logoClicked = () => {
  gtm.pushEvent({
    event: 'interaction',
    category: EAnalyticsCategory.Layout,
    action: 'Logo clicked',
  })
}

export const hamburgerMenuIconClicked = () => {
  const url = window.location.pathname + window.location.search

  gtm.pushEvent({
    event: 'header',
    category: EAnalyticsCategory.Layout,
    target: 'Hamburger menu',
    action: 'Mobile drawer menu opened (clicked)',
    target_properties: url,
  })
}

export const footerRefClicked = (actionName: string) => {
  gtm.pushEvent({
    event: 'interaction',
    category: EAnalyticsCategory.Layout,
    action: 'footerClicked',
    label: actionName,
  })
}

export const mobileDrawerRefClicked = (args: { action: string; target: string }) => {
  const { action, target } = args

  gtm.pushEvent({
    event: 'hamburgerMenu',
    category: EAnalyticsCategory.Layout,
    action,
    target,
  })
}

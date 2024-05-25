import { Footer } from '#root/shared/ui/templates/footer'
import { Header, HeaderViewProps } from '#root/shared/ui/templates/header'
import { PageStatusLayout } from '#root/shared/ui/templates/layout'

import { defineMenuItems } from './constants'

export interface TLayoutDefaultProps {
  children: React.ReactNode
}

export const LayoutDefault = (props: TLayoutDefaultProps) => {
  const { children } = props

  return (
    <>
      <HeaderController />
      {children}
      <FooterController />
    </>
  )
}

export interface TLayoutPrimaryProps {
  children: React.ReactNode
  onShare?: () => void
  onBack: () => void
  logoHref?: string
}

/**
 * Used ONLY for product page (without footer for mobile view) in `@apps/client/ui/src/pages/product/+Page.tsx`
 */
export const LayoutPrimary = (props: TLayoutPrimaryProps) => {
  const { children, onBack, onShare, logoHref } = props

  return (
    <>
      <HeaderController appearance="primary" logoHref={logoHref} onBack={onBack} onShare={onShare} />
      {children}
      <FooterController />
    </>
  )
}
//#region Footer and Header controllers
interface HeaderControllerProps {
  onShare?: () => void
  onBack?: () => void
  appearance?: HeaderViewProps['appearance']
  logoHref?: string
}

const HeaderController = (props: HeaderControllerProps) => {
  const { onBack, onShare, appearance, logoHref } = props

  return (
    <>
      <Header logoHref={logoHref} options={[]} appearance={appearance} onBack={onBack} onShare={onShare} />
    </>
  )
}

const FooterController = () => {
  return <Footer options={defineMenuItems([])} />
}
//#endregion Footer and Header controllers

export const LayoutEmpty = ({ children }: { children: React.ReactNode }) => <>{children}</>

/**
 * @description Used in confirmation and payments pages.
 */
export const LayoutStatusDark = ({ children }: { children: React.ReactNode }) => (
  <PageStatusLayout headerView={<HeaderController appearance="default" />} theme="default">
    {children}
  </PageStatusLayout>
)

/**
 * @description Used in template of error page.
 */
export const LayoutStatusLight = ({ children }: { children: React.ReactNode }) => (
  <PageStatusLayout headerView={<HeaderController appearance="primary" />} theme="primary">
    {children}
  </PageStatusLayout>
)

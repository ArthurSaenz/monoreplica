import { Link as TanStackLink } from '@tanstack/react-router'

export interface LinkProps {
  to: string
  search?: Record<string, unknown>
  children: React.ReactNode
  className?: string
  isExternal?: boolean
  onClick?: () => void
  style?: React.CSSProperties
}

export const Link = (props: LinkProps) => {
  const { to, search, children, className = '', isExternal, onClick, style } = props

  if (isExternal) {
    return (
      <a href={to} className={className} onClick={onClick} style={style} rel="external" target="_blank">
        {children}
      </a>
    )
  }

  return (
    <TanStackLink
      to={to}
      className={className}
      onClick={onClick}
      style={style}
      search={search}
      activeProps={{
        className: 'active',
      }}
    >
      {children}
    </TanStackLink>
  )
}

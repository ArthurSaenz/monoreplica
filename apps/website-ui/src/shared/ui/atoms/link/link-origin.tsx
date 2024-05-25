import { useRouter } from '#root/core/navigation'
import clsx from 'clsx'
import queryString from 'query-string'

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
  const { to, children, className = '', isExternal, onClick, style, search, ...rest } = props

  const router = useRouter()

  const href =
    to +
    (search && Object.keys(search).length > 0
      ? '?' + queryString.stringify(search, { encode: false, arrayFormat: 'bracket-separator' })
      : '')

  return (
    <a
      href={href}
      className={clsx(className, { active: router.pathname === to })}
      onClick={onClick}
      style={style}
      {...(isExternal && { rel: 'external', target: '_blank' })}
      {...rest}
    >
      {children}
    </a>
  )
}

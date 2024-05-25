import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './tooltip.module.scss'

declare module 'react' {
  // augment CSSProperties here
  interface CSSProperties {
    '--bg-color'?: string
  }
}

export interface TTooltipProps {
  children: React.ReactNode
  title?: string | React.ReactNode
  direction?: 'top' | 'bottom' | 'bottom-right' | 'bottom-left'
  className?: string
  force?: boolean
  withoutWrap?: boolean
  theme?: 'default' | 'primary'
  hintClassName?: string
  style?: React.CSSProperties
}

export const Tooltip = forwardRef<HTMLSpanElement, TTooltipProps>((props, ref) => {
  const {
    children,
    direction = 'top',
    title,
    className,
    force,
    withoutWrap,
    theme = 'default',
    hintClassName,
    style,
  } = props

  if (withoutWrap) {
    return (
      <>
        {children && (
          <span
            style={style}
            aria-label={direction}
            className={clsx('hint', `hint--${theme}`, `hint--${direction}`, { 'hint--force': force }, hintClassName)}
          >
            {children}
          </span>
        )}
      </>
    )
  }

  return (
    <div className={clsx(className, styles.root)}>
      {children}

      {title && (
        <span
          ref={ref}
          style={style}
          aria-label={direction}
          className={clsx('hint', `hint--${theme}`, `hint--${direction}`, { 'hint--force': force }, hintClassName)}
        >
          {title}
        </span>
      )}
    </div>
  )
})

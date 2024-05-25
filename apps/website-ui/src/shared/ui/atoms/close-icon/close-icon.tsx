import clsx from 'clsx'

import styles from './close-icon.module.scss'

export interface CloseIconProps {
  onClick: () => void
  className?: string
  appearance?: 'default' | 'primary'
  size?: 'small' | 'medium' | 'large'
}

export const CloseIcon = (props: CloseIconProps) => {
  const { onClick, className, appearance = 'default', size = 'medium' } = props

  return (
    <button
      type="button"
      className={clsx(styles.root, styles[`root--${appearance}`], styles[`root--${size}`], className)}
      onClick={onClick}
    >
      <span>
        <SvgIconClose />
      </span>
    </button>
  )
}

const SvgIconClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

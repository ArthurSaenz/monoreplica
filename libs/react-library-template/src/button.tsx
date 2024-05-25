import clsx from 'clsx'

import styles from './button.module.scss'

export interface TButtonProps {
  children: React.ReactNode
  appearance?: 'default' | 'primary' | 'secondary'
  sizes?: 'xsmall' | 'small' | 'medium' | 'large'
  rounded?: boolean
  className?: string
  fullWidth?: boolean
  icon?: 'arrow' | 'plus'
}

export const Button = (props: TButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, appearance = 'default', sizes = 'medium', fullWidth, rounded, icon, ...rest } = props

  return (
    <button
      className={clsx(
        styles.root,
        styles[`root--${appearance}`],
        styles[`root--${sizes}`],
        {
          [styles['root--fullWidth'] as string]: fullWidth,
          [styles['root--rounded'] as string]: rounded,
        },
        className,
      )}
      {...rest}
    >
      {children}

      {icon && ICONS[icon]}
    </button>
  )
}

const SvgIconArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

const SvgIconPlus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

const ICONS = {
  arrow: <SvgIconArrow />,
  plus: <SvgIconPlus />,
}

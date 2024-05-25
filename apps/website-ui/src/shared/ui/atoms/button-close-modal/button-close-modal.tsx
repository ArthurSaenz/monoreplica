import clsx from 'clsx'

import styles from './button-close-modal.module.scss'

export interface ButtonCloseModalProps {
  onClick: () => void
  className?: string
}

export const ButtonCloseModal = (props: ButtonCloseModalProps) => {
  const { onClick, className } = props

  return (
    <button type="button" onClick={onClick} className={clsx(styles['close-btn'], className)}>
      <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.698 11.9A14 14 0 1 1 9.9 31.697a14 14 0 0 1 19.798-19.799" fill="#F75064" />
        <path
          d="M25.397 27.406a1.981 1.981 0 0 1-2.802 0l-8.397-8.397A1.981 1.981 0 0 1 17 16.208l8.397 8.397a1.981 1.981 0 0 1 0 2.801"
          fill="#fff"
        />
        <path
          d="M14.2 27.404a1.98 1.98 0 0 1 0-2.801l8.397-8.397a1.982 1.982 0 0 1 2.801 2.802l-8.396 8.396a1.981 1.981 0 0 1-2.802 0"
          fill="#fff"
        />
      </svg>
    </button>
  )
}

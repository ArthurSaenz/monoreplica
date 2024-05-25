import clsx from 'clsx'

import styles from './switch.module.scss'

export interface SwitchProps {
  checked: boolean
  onChange?: (checked: boolean) => void
  className?: string
  disabled?: boolean
}

export const Switch = (props: SwitchProps) => {
  const { checked, onChange, className, disabled } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <label className={clsx(styles.root, className)}>
      <input type="checkbox" checked={checked} onChange={handleChange} disabled={disabled} />
      <span className={styles.slider} />
    </label>
  )
}

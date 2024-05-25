---
to: <%= pathname %>/<%= h.changeCase.param(name) %>.tsx
---
import clsx from 'clsx'

import styles from './<%= h.changeCase.param(name) %>.module.css'

export interface I<%= name %>Props {}

export const <%= name %> = (props: I<%= name %>Props) => {
  const {} = props

  return <div className={clsx(styles.root)}>{}</div>
}

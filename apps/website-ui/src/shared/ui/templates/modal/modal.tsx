import clsx from 'clsx'
import { useCallback, useRef } from 'react'

import { useBodyScrollLock, usePortal } from '@monorepo/web-toolkit'

import styles from './modal.module.scss'

export interface ModalProps {
  children?: React.ReactNode
  onClose: (event: unknown) => void
  backDrop?: 'default' | 'dark' | 'black' | 'light'
  position?: 'center' | 'bottom' | 'middle-top'
}

export const Modal = (props: ModalProps) => {
  const { children, onClose, backDrop = 'default', position = 'center' } = props

  const { Portal } = usePortal('modal-root')

  const bodyRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const Modal = useCallback(({ children }: { children: React.ReactNode }) => <Portal>{children}</Portal>, [])

  useBodyScrollLock(bodyRef, {
    locked: true,
  })

  return (
    <Modal>
      <div
        className={clsx(styles['modal-background'], styles[`modal-background--${backDrop}`])}
        id="modal-background"
        onClick={onClose}
      />
      <div
        ref={bodyRef}
        className={clsx(
          styles['modal-body'],
          position === 'center' && styles['modal-body--center'],
          position === 'bottom' && styles['modal-body--bottom'],
          position === 'middle-top' && styles['modal-body--middle-top'],
        )}
        data-id="modal-body"
        role="dialog"
        id="dialog1"
        aria-labelledby="dialog1Title"
        aria-modal="true"
      >
        {children}
      </div>
    </Modal>
  )
}

export const FilterBackdrop = ({ onClose }: ModalProps) => {
  const { Portal } = usePortal('modal-root')

  const Modal = useCallback((props: { children: React.ReactNode }) => <Portal>{props.children}</Portal>, [])

  return (
    <Modal>
      <div className={styles['filter-background']} onClick={onClose} id="modal-background" />
    </Modal>
  )
}

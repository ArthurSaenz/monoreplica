import { Button } from '#root/shared/ui/atoms/button'
import { CloseIcon } from '#root/shared/ui/atoms/close-icon'
import { Modal } from '#root/shared/ui/templates/modal'

import styles from './mobile-update-modal.module.scss'

export interface MobileUpdateModalProps {
  activeCategoryColor?: string
  onClose: () => void
  onApprove: () => void
  type: 'imediateUpdate' | 'flexibleUpdate' | null
}

export const MobileUpdateModal = (props: MobileUpdateModalProps) => {
  const { type, activeCategoryColor, onClose, onApprove } = props

  return (
    <Modal onClose={type === 'flexibleUpdate' ? onClose : () => {}} backDrop="dark">
      <div className={styles.root} style={{ '--active-category-color': activeCategoryColor }}>
        {type === 'flexibleUpdate' && <CloseIcon onClick={onClose} className={styles.close} />}

        <div className={styles['text-wrapper']}>
          <div className={styles.title}>{type ? TEXT[type].title : ''}</div>
          <div className={styles.subtitle}>{type ? TEXT[type].subText : ''}</div>
        </div>

        <img className={styles.image} src={type ? TEXT[type].imageUrl : ''} alt="update-app" />

        <div className={styles.footer}>
          <Button appearance="primary" onClick={onApprove}>
            {T.openStore}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

const T = {
  openStore: 'יאללה לעדכן',
  title: 'title',
  subText: 'subText',
}

const TEXT = {
  imediateUpdate: {
    title: 'זה הזמן לעדכן :)',
    subText: 'שומעים רגע... יש לנו גרסה שיכולה לשפר את מחירי הדילים, אל תפספסו!',
    imageUrl: '/assets/images/common/empty-filters.png',
  },
  flexibleUpdate: {
    title: 'נולד לנו עדכון',
    subText: 'לא תפרגנו לגרסה החדשה? אל תגידו לא ידענו... לא שמענו...',
    imageUrl: '/assets/images/common/recommend-update.png',
  },
}

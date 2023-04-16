import { FC, Suspense } from 'react'
import { Loader, Modal } from 'Shared'
import { AuthorizationFormAsync } from '../AuthorizationForm/AuthorizationFormAsync'

import s from './AuthorizationModal.module.scss'

interface IAuthorizationModal {
  open: boolean
  onClose: () => void
}

const AuthorizationModal: FC<IAuthorizationModal> = (props) => {
  const { open, onClose } = props

  return (
      <Modal open={open} onClose={onClose}>
          <Suspense fallback={<Loader className={s.loader} />}>
              <AuthorizationFormAsync onLoginSuccess={onClose} />
          </Suspense>
      </Modal>
  )
}

export { AuthorizationModal }

import { FC, ReactNode, MouseEvent, useEffect, useState, useCallback } from 'react'
import cn from 'classnames'

import Portal from '../Portal'

import s from './Modal.module.scss'

interface IModal {
  children: ReactNode
  open: boolean
  onClose: () => void
  className?: string
  lazy?: boolean
};

const Modal: FC<IModal> = (props) => {
  const { children, open, onClose, className = '', lazy = false } = props

  const [isMounted, setIsMounted] = useState<boolean>(false)

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onKeyDown])

  useEffect(() => {
    if (open) {
      setIsMounted(true)
    }
  }, [open])

  if (!isMounted && lazy) {
    return null
  }

  return (
      <Portal>
          <div
              className={cn(s.overlay, className, { [s.open]: open })}
              onClick={onClose}
        >
              <div
                  className={s.modal}
                  onClick={onContentClick}
            >
                  {children}
              </div>
          </div>
      </Portal>
  )
}

export default Modal

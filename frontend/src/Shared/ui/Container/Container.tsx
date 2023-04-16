import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './Container.module.scss'

interface IContainer {
  children: ReactNode
  className?: string
}

const Container: FC<IContainer> = (props) => {
  const {
    children,
    className = ''
  } = props

  return (
      <div
          className={cn(s.container, className)}
        >{children}</div>
  )
}

export default Container

import { memo, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Image.module.scss'

export interface IImage extends Omit<HTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  type?: 'default' | 'avatar'
  className?: string
}

export const Image = memo((props: IImage) => {
  const { type = 'default', className, src, ...otherProps } = props

  const mods = {
    [s.circle]: type === 'avatar'
  }

  return (
      <img
          {...otherProps}
          src={src}
          className={cn(s.image, mods, className)}
    />
  )
})

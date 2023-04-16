import { memo } from 'react'
import cn from 'classnames'

import s from './Text.module.scss'

interface IText {
  children: string
  className?: string
  variant?: 'title' | 'text'
  uppercase?: boolean
}

export const Text = memo((props: IText) => {
  const { children, variant = 'text', uppercase = false, className } = props

  const mods = {
    [s.uppercase]: uppercase
  }

  if (variant === 'title') {
    return (
        <h3 className={cn(s.title, mods, className)}>{children}</h3>
    )
  }

  if (variant === 'text') {
    return (
        <p className={cn(s.text, mods, className)}>{children}</p>
    )
  }
})

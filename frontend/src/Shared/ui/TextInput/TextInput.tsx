import { FC, ChangeEvent, HTMLAttributes } from 'react'

import s from './TextInput.module.scss'

interface ITextInput extends Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'> {
  value: string
  onChange: any
  placeholder?: string
  type?: 'text' | 'password' | 'email'
}

export const TextInput: FC<ITextInput> = (props) => {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    ...otherProps
  } = props

  const changeEventHandler = (e: any) => {
    onChange?.(e.target.value)
  }

  return (
      <input
          type={type}
          className={s.input}
          value={value}
          onChange={changeEventHandler}
          placeholder={placeholder}
          {...otherProps}
      />
  )
}

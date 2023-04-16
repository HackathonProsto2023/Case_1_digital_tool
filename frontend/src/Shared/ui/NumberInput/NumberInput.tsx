import { FC, ChangeEvent, HTMLAttributes } from 'react'

import s from './NumberInput.module.scss'

interface INumberInput extends Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'> {
  value: number
  onChange: (value: any) => void
  placeholder?: string
  type?: 'text' | 'password' | 'email'
}

export const NumberInput: FC<INumberInput> = (props) => {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    ...otherProps
  } = props

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

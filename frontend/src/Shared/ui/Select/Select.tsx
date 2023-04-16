import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Select.module.scss'
import { RecurterEnumType } from 'Features/Registration/model/types/RegisterUserSchema'

export interface SelectOptionType {
  label: string
  value: RecurterEnumType
}

interface SelecrProps extends Omit<HTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  value: string
  onChange: (value: string) => void
  options: SelectOptionType[]
}

export const Select: FC<SelecrProps> = (props) => {
  const { onChange, className, options, ...otherProps } = props

  if (!options) return null

  const handleChangeOption = (e: any) => {
    const { value } = e.target
    onChange(value)
  }

  return (
      <select onChange={handleChangeOption} {...otherProps}>
          {options.map(({ label, value }, index) => (
              <option
                  key={index}
                  value={value}
                  className={cn(s.select, className)}
            >{label}</option>
          ))}
      </select>
  )
}

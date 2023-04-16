import { useState, memo } from 'react'
import cn from 'classnames'
import s from './MultipleChoiseSelect.module.scss'

interface OptionsType {
  name: string
  id: number
}

interface MultipleChoiseSelectProps {
  options: OptionsType[]
  className?: string
  title?: string
  placeholder?: string
  setSelectedOptions: (value: any) => void
}

export const MultipleChoiseSelect = memo((props: MultipleChoiseSelectProps) => {
  const {
    options,
    className,
    title,
    // placeholder = 'Выберете значение',
    setSelectedOptions,
    ...otherProps
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const listMods = {
    [s.open]: isOpen
  }

  if (!options) return null

  const handleSelectItem = (e: any) => {
    const { value } = e.target
    const numberValue = Number(value)
    setSelectedOptions((prevOptions: any) => {
      return prevOptions.map((option: any) => {
        if (option.id === numberValue) {
          return { ...option, checked: true }
        }
        return option
      })
    })
  }

  return (
      <div className={cn('checkboxGroup', className)} {...otherProps}>
          <span
              className={s.title}
              onClick={() => setIsOpen(prev => !prev)}
              >{title}</span>
          <div className={cn(s.list, listMods)}>
              {options.map(({ name, id }) => (
                  <label key={id} className={s.item}>
                      <input type="checkbox" value={id} onChange={handleSelectItem} />
                      <span className="checkboxGroup__label">{name}</span>
                  </label>
              ))}
          </div>
      </div>
  )
})

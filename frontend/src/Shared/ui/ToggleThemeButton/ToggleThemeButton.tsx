import { FC, memo, ReactNode } from 'react'

import { useTheme } from 'Shared'
import Button from 'Shared/ui/Button'

interface IToggleThemeButton {
  children: ReactNode
  className?: string
}

const ToggleThemeButton = memo((props: IToggleThemeButton) => {
  const {
    children,
    className
  } = props
  const { toggleTheme } = useTheme()

  return (
    <Button
      className={className}
      onClick={toggleTheme}
      {...props}
    >{children}</Button>
  )
})

export default ToggleThemeButton

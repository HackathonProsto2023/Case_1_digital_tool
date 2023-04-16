import { memo, ReactNode } from 'react'

import { useTypedTranslation } from 'Shared/lib/hooks/useTypedTranslation'
import Button from 'Shared/ui/Button'

interface IToggleLanguegeButton {
  children: ReactNode
}

const ToggleLanguegeButton = memo(({ children }: IToggleLanguegeButton) => {
  const { i18n } = useTypedTranslation()

  const toggleLanguege = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggleLanguege}
    >{children}</Button>
  )
})

export default ToggleLanguegeButton

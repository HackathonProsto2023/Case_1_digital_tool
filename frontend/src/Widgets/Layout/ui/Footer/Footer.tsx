import { memo } from 'react'
import { useTypedTranslation } from 'Shared/lib/hooks/useTypedTranslation'

import s from './Footer.module.scss'

export const Footer = memo(() => {
  const { t } = useTypedTranslation()

  return (
    <footer className={s.footer}>
      {t('widget_footer_title')}
    </footer>
  )
})

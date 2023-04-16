import { FC } from 'react'
import { Button, useTypedTranslation } from 'Shared'

import s from './PageError.module.scss'

const PageError: FC = () => {
  const { t } = useTypedTranslation('pageError')

  const reload = () => {
    window.location.reload()
  }

  return (
      <div className={s.container}>
          <span className={s.info}>{t('page_error_title')}</span>
          <Button onClick={reload}>{t('page_error_button_text')}</Button>
      </div>
  )
}

export default PageError

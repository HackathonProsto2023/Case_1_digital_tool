import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Logotype, ToggleLanguegeButton, ToggleThemeButton, useAppDispatch, useTypedTranslation } from 'Shared'

import { useSelector } from 'react-redux'
import { getUserAuthState } from '../../model/selectors/getUserAuthState'
import { UserActions } from 'Entities/User'

import s from './Header.module.scss'

export const Header = memo(() => {
  const { t } = useTypedTranslation()
  const dispatch = useAppDispatch()

  const { token } = useSelector(getUserAuthState)

  if (token) {
    return (
        <header className={s.header}>
            <Container className={s.container}>
                <div className={s.links}>
                    <Link className={s.link} to={'/'}>
                        <Logotype className={s.logotype} />
                    </Link>
                </div>
                <div className={s.search}>
                </div>
                <div className={s.controls}>
                    <Button
                        onClick={() => dispatch(UserActions.logoutUser())}
                        >{t('widget_header_logout_button')}</Button>
                    <ToggleLanguegeButton>{t('widget_header_languege_switcher')}</ToggleLanguegeButton>
                    <ToggleThemeButton className={s.button}>{t('widget_header_theme_switcher')}</ToggleThemeButton>
                </div>
            </Container>
        </header>
    )
  }

  return (
      <>
          <header className={s.header}>
              <Container className={s.container}>
                  <div className={s.links}>
                      <Link className={s.link} to={'/'}>
                          <Logotype className={s.logotype} />
                      </Link>
                  </div>
                  <div className={s.search}>
                  </div>
                  <div className={s.controls}>
                      <ToggleLanguegeButton>{t('widget_header_languege_switcher')}</ToggleLanguegeButton>
                      <ToggleThemeButton className={s.button}>{t('widget_header_theme_switcher')}</ToggleThemeButton>
                  </div>
              </Container>
          </header>
      </>
  )
})

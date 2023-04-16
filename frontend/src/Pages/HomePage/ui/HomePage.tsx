import { Button } from 'Shared'
import { Layout } from 'Widgets'

import s from './Home.module.scss'
import { AuthorizationModal, RegistrationModal } from 'Features'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserAccessToken } from 'Entities/User'
import { Link } from 'react-router-dom'
import { AppRoutes } from 'Shared/config/RouterConfig/AppRoutes'
import { getUserRole } from 'Entities/User/selectors/getUserRole/getUserRole'
import { RecurterEnumType } from 'Features/Registration/model/types/RegisterUserSchema'

const HomePage: React.FC = () => {
  const [isOpenLoginModal, setOpenLoginModal] = useState(false)
  const [isOpenSignUpModal, setOpenSignUpModal] = useState(false)

  const isAuthed = useSelector(getUserAccessToken)
  const role: RecurterEnumType = useSelector(getUserRole)

  if (isAuthed && role === 'applicant') {
    return (
        <Layout className={s.controls}>
            <Link className={s.link} to={AppRoutes.RESUME}>Заполнить резюме</Link>
            <Link className={s.link} to={AppRoutes.VACANCIES}>Открыть список вакансий</Link>
        </Layout>
    )
  }

  if (isAuthed && role === 'recruiter') {
    return (
        <Layout className={s.controls}>
            <Link className={s.link} to={AppRoutes.CREATE_VACANCIES}>Создать вакансию</Link>
            <Link className={s.link} to={AppRoutes.VACANCIES}>Открыть список вакансий</Link>
        </Layout>
    )
  }

  return (
      <>
          <Layout className={s.controls}>
              <Button
                  onClick={() => setOpenLoginModal(true)}
                  className={s.button}
              >Войти</Button>
              <Button
                  onClick={() => setOpenSignUpModal(true)}
                  className={s.button}
              >Регистрация</Button>
          </Layout>

          <AuthorizationModal
              open={isOpenLoginModal}
              onClose={() => setOpenLoginModal(false)}
/>
          <RegistrationModal
              open={isOpenSignUpModal}
              onClose={() => setOpenSignUpModal(false)}
/>
      </>
  )
}

export default HomePage

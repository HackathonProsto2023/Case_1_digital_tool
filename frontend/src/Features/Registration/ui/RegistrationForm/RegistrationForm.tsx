import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { Button, TextInput, useAppDispatch, useTypedTranslation } from 'Shared'
import { DynamicModuleLoader } from 'Shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { CreateUserAction, CreateUserReducer } from '../../model/slices/registerUserByEmail/RegisterUserByEmail'
import { RegisterByEmail } from '../../model/services/RegisterUserByEmail/RegisterByEmail'

import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail'
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword'
import { getRegistrationLoading } from '../../model/selectors/getRegistrationLoading/getRegistrationLoading'

import s from './RegistrationForm.module.scss'
import { RecurterEnumType } from 'Features/Registration/model/types/RegisterUserSchema'
import { Select } from 'Shared/ui/Select'
import { SelectOptions } from 'Features/Registration/consts'
import { getRegistrationRole } from 'Features/Registration/model/selectors/getRegistrationRole/getRegistrationRole'
import { getRegistrationName } from 'Features/Registration/model/selectors/getRegistrationName/getRegistrationName'
import { getRegistrationLastName } from 'Features/Registration/model/selectors/getRegistrationLastName/getRegistrationLastName'
import { getRegistrationLoginName } from 'Features/Registration/model/selectors/getRegistrationLoginName/getRegistrationLoginName'

interface IRegistrationForm {
  onRegisterSuccess?: (response: any) => void
}

const initialReducers: ReducersList = { registerUserSchema: CreateUserReducer }

const RegistrationForm = memo(({ onRegisterSuccess }: IRegistrationForm) => {
  const dispatch = useAppDispatch()
  const { t } = useTypedTranslation()

  const email = useSelector(getRegistrationEmail)
  const password = useSelector(getRegistrationPassword)
  const isLoading = useSelector(getRegistrationLoading)
  const role = useSelector(getRegistrationRole)
  const name = useSelector(getRegistrationName)
  const lastname = useSelector(getRegistrationLastName)
  const login = useSelector(getRegistrationLoginName)

  const onChahgeEmail = useCallback((value: string) => {
    dispatch(CreateUserAction.setEmail(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(CreateUserAction.setPassword(value))
  }, [dispatch])

  const onChangeName = useCallback((value: string) => {
    dispatch(CreateUserAction.setName(value))
  }, [dispatch])
  const onChangeLastName = useCallback((value: string) => {
    dispatch(CreateUserAction.setLastName(value))
  }, [dispatch])
  const onChangeLogin = useCallback((value: string) => {
    dispatch(CreateUserAction.setLogin(value))
  }, [dispatch])

  const onChangeRole = useCallback((value: RecurterEnumType) => {
    dispatch(CreateUserAction.setRole(value))
  }, [dispatch])

  const handleRegister = useCallback(async () => {
    const body = {
      username: login,
      first_name: name,
      last_name: lastname,
      role,
      email,
      password
    }
    const response = await dispatch(RegisterByEmail(body))

    if (response.meta.requestStatus === 'fulfilled') {
      onRegisterSuccess(response)
    }
  }, [dispatch, email, password, lastname, name, login, role])

  return (
      <DynamicModuleLoader reducers={initialReducers}>
          <div className={s.form}>
              <span className={s.title}>{t('feature_register_by_email_title')}</span>
              {/* {error && <span>{error}</span>} */}
              <div className={s.fields}>
                  <TextInput
                      placeholder={'Имя'}
                      value={name}
                      onChange={onChangeName}
          />
                  <TextInput
                      placeholder={'Фамилия'}
                      value={lastname}
                      onChange={onChangeLastName}
          />
                  <TextInput
                      placeholder={'Имя пользователя'}
                      value={login}
                      onChange={onChangeLogin}
          />

                  <TextInput
                      placeholder={'E-mail'}
                      value={email}
                      onChange={onChahgeEmail}
          />
                  <TextInput
                      type='password'
                      placeholder={'Пароль'}
                      value={password}
                      onChange={onChangePassword}
          />
                  <Select options={SelectOptions} onChange={onChangeRole} value={role} />
                  <Button
                      onClick={handleRegister}
                      disabled={isLoading}
          >{t('feature_register_by_email_button_text')}</Button>
              </div>
          </div>
      </DynamicModuleLoader>
  )
})

export default RegistrationForm

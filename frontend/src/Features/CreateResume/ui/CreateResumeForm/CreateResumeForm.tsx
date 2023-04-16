import { memo, useCallback } from 'react'

import { Button, TextInput } from 'Shared'

import { DynamicModuleLoader } from 'Shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { CreateResumeActions, CreateResumeReducer } from 'Features/CreateResume/model/slices/CreateResumeSlice'
import { useSelector } from 'react-redux'
import { getResumeEmail } from 'Features/CreateResume/model/selectors/getLoginEmail/getResumeEmail'
import { getResumeName } from 'Features/CreateResume/model/selectors/getResumeName/getResumeName'
import { getResumeLastName } from 'Features/CreateResume/model/selectors/getResumeLastName/getResumeLastName'

import s from './CreateResumeForm.module.scss'
import { MultipleChoiseSelect } from 'Shared/ui/MultipleChoiseSelect'

const initialReducers: ReducersList = { createResumeSchema: CreateResumeReducer }

const CreateResumeForm = memo(() => {
  // const dispatch = useAppDispatch()
  const { setEmail, setName, setLastName, setSkills } = CreateResumeActions

  const email = useSelector(getResumeEmail)
  const name = useSelector(getResumeName)
  const lastanme = useSelector(getResumeLastName)

  const handleChangeEmail = (value: string) => {
    setEmail(value)
  }

  const handleChangeName = (value: string) => {
    setName(value)
  }

  const handleChangeLastname = (value: string) => {
    setLastName(value)
  }

  const handleChangeSkills = (value: number) => {
    setSkills(value)
  }

  const onApplyResumeClick = useCallback(() => {
    // const response = await dispatch(LoginByEmail({ email, password }))
    // if (response.meta.requestStatus === 'fulfilled') {
    //   onLoginSuccess()
    // }
  }, [])

  return (
      <DynamicModuleLoader reducers={initialReducers}>
          <div className={s.form}>
              <span className={s.title}>Создать резюме</span>
              <div className={s.fields}>
                  <TextInput value={email} onChange={handleChangeEmail} placeholder="email" />
                  <TextInput value={name} onChange={handleChangeName} placeholder="name" />
                  <TextInput value={lastanme} onChange={handleChangeLastname} placeholder="lastname" />
                  <MultipleChoiseSelect options={[{ id: 1, name: 'test' }, { id: 2, name: 'test2' }, { id: 3, name: 'test3' }]} setSelectedOptions={handleChangeSkills} />
                  <Button onClick={onApplyResumeClick}>Создать резюме</Button>
              </div>
          </div>
      </DynamicModuleLoader>
  )
})

export default CreateResumeForm

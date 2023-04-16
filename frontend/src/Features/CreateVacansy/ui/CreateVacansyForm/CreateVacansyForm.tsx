import { useState, useEffect } from 'react'

import { Button, Container } from 'Shared'

import { UserAccessTokenKey } from 'Shared/consts/AppConsts'
import s from './CreateVacansyForm.module.scss'
import { MultipleChoiseSelect } from 'Shared/ui/MultipleChoiseSelect'
import axios from 'axios'
import { AppRoutes } from 'Shared/config/RouterConfig/AppRoutes'
import { Link } from 'react-router-dom'

const CreateVacansyForm = () => {
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [salary, setSalary] = useState(0)
  const [text, setText] = useState('')
  const [skills, setSkills] = useState([])
  const [busyness, setBusyness] = useState([])

  const fetchSkills = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/skills/')
    const correctSkills = response.data.map((item: any) => ({ ...item, checked: false }))
    setSkills(correctSkills)
  }
  const fetchBusyness = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/busyness/')
    const correctBusyness = response.data.map((item: any) => ({ ...item, checked: false }))
    setBusyness(correctBusyness)
  }

  useEffect(() => {
    fetchSkills()
    fetchBusyness()
  }, [])

  const onApplyVacansyClick = () => {
    const url = 'http://127.0.0.1:8000/api/vacancy/'
    const body = {
      name,
      text,
      company_name: companyName,
      salary,
      busyness: busyness.filter(item => item.checked).map(item => item.id),
      skills: skills.filter(item => item.checked).map(item => item.id)
    }
    axios.post(url, body, {
      headers: {
        Authorization: `Token ${localStorage.getItem(UserAccessTokenKey)}`
      }
    }).then(() => {
      alert('Вакансия добавлена')
      setName('')
      setCompanyName('')
      setSalary(0)
      setText('')
      setSkills(prev => prev.map(item => ({ ...item, checked: false })))
      setBusyness(prev => prev.map(item => ({ ...item, checked: false })))
    })
  }

  return (
      <Container>
          <div className={s.form}>
              <span className={s.title}>Создать вакансию</span>
              <div className={s.fields}>
                  <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Название вакансии" />
                  <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Описание" />
                  <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Название компании" />
                  <input type='number' value={salary} onChange={(e) => setSalary(Number(e.target.value))} placeholder="Заработная плата" />
                  <MultipleChoiseSelect
                      title='Ваши скиллы'
                      options={skills}
                      setSelectedOptions={setSkills}
                  />

                  <MultipleChoiseSelect
                      title='Тип занятости'
                      options={busyness}
                      setSelectedOptions={setBusyness}
                  />

                  <Button onClick={onApplyVacansyClick}>Создать вакансию</Button>
              </div>
          </div>
          <div>
              <Link className={s.link} to={{ pathname: `../${AppRoutes.VACANCIES}` }}>Открыть Список вакансий</Link>
          </div>
      </Container>
  )
}

export default CreateVacansyForm

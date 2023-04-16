import { useEffect, useState } from 'react'
import { Layout } from 'Widgets'

import s from './VacansiesPage.module.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

const VacansiesPage = () => {
  const [vacancies, setVacancies] = useState([])

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/vacancy/'
    axios.get(url).then((response) => {
      setVacancies(response.data.results)
    })
  }, [])

  return (
      <Layout className={s.wrapper}>
          {vacancies.map(item => (
              <div className={s.card} key={item.id}>
                  <span>Дата публикации: {new Date(item.pub_date).toLocaleString()}</span>
                  <h2>Должность:&nbsp;
                      <Link to={`${RoutesPath.vacancy_by_id}/${item.id}`}>{item.name}</Link>
                  </h2>
                  <span>Зарплата: {item.salary}</span>
                  <span className={s.skillsList}>Скиллы: {item.skills.map((skill: any) => (
                      <Link className={s.linkList} to={'/'} key={skill.id}>{skill.name}</Link>
                  ))}</span>
              </div>
          ))}
      </Layout>
  )
}

export default VacansiesPage

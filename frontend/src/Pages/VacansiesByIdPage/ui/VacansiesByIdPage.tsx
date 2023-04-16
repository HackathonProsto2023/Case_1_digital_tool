import { useEffect, useState } from 'react'

import { Layout, PageLoader } from 'Widgets'
import axios from 'axios'
import { useParams } from 'react-router'

import s from './VacansiesByIdPage.module.scss'
import { Link } from 'react-router-dom'

const VacansiesByIdPage = () => {
  const { id } = useParams()
  const [vacancy, setVacancy] = useState(null)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/vacancy/${id}/`)
      .then(res => setVacancy(res.data))
  }, [id])

  if (!vacancy) return <PageLoader/>

  console.log(vacancy)

  return (
      <Layout className={s.wrapper}>
          <div className={s.content}>
              <span>Дата публикации: {new Date(vacancy.pub_date).toLocaleString()}</span>
              <h1 className={s.header}>Должность: {vacancy.name}</h1>
              <span>Заработная плата: {vacancy.salary}</span>
              <span className={s.skillsList}>Скиллы: {vacancy.skills.map((skill: any) => (
                  <Link className={s.linkList} to={'/'} key={skill.id}>{skill.name}</Link>
              ))}</span>
              <div className={s.description}>
                  <span className={s.subtitle}>Немного о нас</span>
                  <p>{vacancy.text}</p>
              </div>
              <div className={s.contact}>
                  <span>Контакты:</span>
                  <a href={`mailto: ${vacancy.author.email}`}>{vacancy.author.email}</a>
              </div>
          </div>
      </Layout>
  )
}

export default VacansiesByIdPage

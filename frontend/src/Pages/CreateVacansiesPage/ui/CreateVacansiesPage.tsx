import { Layout } from 'Widgets'
import { CreateVacansyForm } from 'Features/CreateVacansy'
import { Container } from 'Shared'

import s from './CreateVacansiesPage.module.scss'

const CreateVacansiesPage = () => {
  return (
      <Layout className={s.wrapper}>
          <Container className={s.content}>
              <CreateVacansyForm/>
          </Container>
      </Layout>
  )
}

export default CreateVacansiesPage

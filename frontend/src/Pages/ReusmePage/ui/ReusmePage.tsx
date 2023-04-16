import { CreateResumeForm } from 'Features/CreateResume'
import { Container } from 'Shared'
import { Layout } from 'Widgets'

import s from './ReusmePage.module.scss'

const ReusmePage = () => {
  return (
      <Layout>
          <Container className={s.content}>
              <CreateResumeForm/>
          </Container>
      </Layout>
  )
}

export default ReusmePage

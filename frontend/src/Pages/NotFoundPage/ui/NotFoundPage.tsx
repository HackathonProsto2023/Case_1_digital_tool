import { NavLink } from 'react-router-dom'
import { useTypedTranslation } from 'Shared'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import { Layout } from 'Widgets'

const NotFoundPage: React.FC = () => {
  const { t } = useTypedTranslation()

  return (
      <Layout>
          <span>{t('page_404_title')}</span>
          <NavLink to={RoutesPath.main}>{t('page_404_button_text')}</NavLink>
      </Layout>
  )
}

export default NotFoundPage

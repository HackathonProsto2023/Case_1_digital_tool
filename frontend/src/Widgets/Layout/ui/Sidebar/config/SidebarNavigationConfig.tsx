import i18next from 'i18next'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import HomeIcon from '@mui/icons-material/Home'
import { ReactNode } from 'react'

interface ISidebarNavigationItemSchema {
  icon: ReactNode
  route: string
  text: string
}

interface ISidebarNavigationSchema {
  Home: ISidebarNavigationItemSchema
}

type ISidebarNavigationSchemaKeys = keyof ISidebarNavigationSchema

export const SidebarNavigationSchema: Record<ISidebarNavigationSchemaKeys, ISidebarNavigationItemSchema> = {
  Home: {
    icon: <HomeIcon />,
    route: RoutesPath.main,
    text: i18next.t('widget_sidebar_navigation_text_home')
  }
}

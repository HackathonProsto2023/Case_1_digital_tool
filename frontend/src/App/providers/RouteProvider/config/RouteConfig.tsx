import { HomePage, NotFoundPage } from 'Pages'
import { ReusmePage } from 'Pages/ReusmePage'
import { VacansiesPage } from 'Pages/VacansiesPage'
import { CreateVacansiesPage } from 'Pages/CreateVacansiesPage'
import { RouteProps } from 'react-router'

import { AppRoutes, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import { VacansiesById } from 'Pages/VacansiesByIdPage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage />
  },
  [AppRoutes.RESUME]: {
    path: RoutesPath.resume,
    element: <ReusmePage />
  },
  [AppRoutes.VACANCIES]: {
    path: RoutesPath.vacansies,
    element: <VacansiesPage />
  },
  [AppRoutes.CREATE_VACANCIES]: {
    path: RoutesPath.create_vacansies,
    element: <CreateVacansiesPage />
  },
  [AppRoutes.VACANCY_BY_ID]: {
    path: RoutesPath.vacancy_by_id + '/:id',
    element: <VacansiesById />
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />
  }
}

export enum AppRoutes {
  MAIN = 'main',
  RESUME = 'resume',
  VACANCIES = 'vacansies',
  CREATE_VACANCIES = 'create_vacansies',
  VACANCY_BY_ID = 'vacancy_by_id',

  // 404
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RESUME]: '/resume',
  [AppRoutes.VACANCIES]: '/vacansies',
  [AppRoutes.CREATE_VACANCIES]: '/create_vacansies',
  [AppRoutes.VACANCY_BY_ID]: '/vacansies/vacansy', // + id
  // 404
  [AppRoutes.NOT_FOUND]: '*'
}

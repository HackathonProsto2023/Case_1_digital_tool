import { Suspense, FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'Widgets'
import { routeConfig } from '../config/RouteConfig'

const AppRouter: FC = () => {
  return (
      <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
              <Route
                  key={path}
                  path={path}
                  element={<Suspense fallback={<PageLoader />}>
                      {element}
                  </Suspense>} />
          ))}
      </Routes>
  )
}

export default AppRouter

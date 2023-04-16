import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { UserReducer } from 'Entities/User'
import { NavigateOptions, To } from 'react-router-dom'
import { API } from 'Shared/api/api'

import { createReducerManager } from './ReducerManger'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema, navigate?: (to: To, options: NavigateOptions) => void) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    userStateSchema: UserReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: IS_DEV,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: API,
          navigate
        }
      }
    })
  })
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

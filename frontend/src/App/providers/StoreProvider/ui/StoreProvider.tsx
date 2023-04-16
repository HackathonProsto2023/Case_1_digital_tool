import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'App'
import { StateSchema } from '../config/StateSchema'
import { useNavigate } from 'react-router-dom'

interface IStoreProvider {
  children?: ReactNode
  initialState?: StateSchema
};

const StoreProvider: FC<IStoreProvider> = (props) => {
  const {
    children,
    initialState
  } = props
  const navigate = useNavigate()

  const store = createReduxStore(initialState, navigate)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider

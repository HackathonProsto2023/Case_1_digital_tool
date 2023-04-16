import { FC } from 'react'
import Loader from 'Shared/ui/Loader'

import s from './PageLoader.module.scss'

interface IPageLoader {
  className?: string
}

const PageLoader: FC<IPageLoader> = (props) => {
  const { className } = props

  return (
      <div className={s.container}>
          <Loader className={className} />
      </div>
  )
}

export default PageLoader

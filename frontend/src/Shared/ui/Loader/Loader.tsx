import { FC } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

interface ILoader {
  className?: string
}

const Loader: FC<ILoader> = (props) => {
  const { className } = props

  return (
      <CircularProgress className={className}/>
  )
}

export default Loader

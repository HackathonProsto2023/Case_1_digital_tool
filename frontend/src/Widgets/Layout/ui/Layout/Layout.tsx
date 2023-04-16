import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { Footer } from '../Footer'
import { Header } from '../Header'

import s from './Layout.module.scss'

interface ILayout {
  children: ReactNode
  className?: string
}

const Layout: FC<ILayout> = ({ children, className }) => {
  return (
      <div className={s.layout}>
          <Header />
          <div className={s.wrapper}>
              {/* <Sidebar /> */}
              <main className={cn(s.main, className)}>{children}</main>
          </div>
          {/* <Footer /> */}
      </div>
  )
}

export default Layout

import { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../lib/ThemeContext'

interface IThemeProvider {
  children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, toggleTheme] = useState(defaultTheme)

  const themeProps = useMemo(() => {
    return {
      theme,
      setTheme: toggleTheme
    }
  }, [theme])

  return (
      <ThemeContext.Provider value={themeProps}>
          {children}
      </ThemeContext.Provider>
  )
}

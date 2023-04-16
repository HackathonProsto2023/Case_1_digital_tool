import { createContext } from 'react'

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark'
}

interface IContext {
  theme?: ThemeEnum
  setTheme?: (theme: ThemeEnum) => void
}

export const ThemeContext = createContext<IContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

import { useAppDispatch } from './lib/hooks/useAppDispatch'
import { useTypedTranslation } from './lib/hooks/useTypedTranslation'
import { useTheme } from './lib/hooks/useTheme'

import Button from './ui/Button'
import { ToggleThemeButton } from './ui/ToggleThemeButton'
import { ToggleLanguegeButton } from './ui/ToggleLanguegeButton'
import Loader from './ui/Loader'
import Container from './ui/Container'
import Portal from './ui/Portal'
import Modal from './ui/Modal/Modal'
import { IUser } from './types/RegistrationAutorizationTypes'
import Logotype from './assets/icons/logo.svg'
import { TextInput } from './ui/TextInput'
import { NumberInput } from './ui/NumberInput'

export {
  Button,
  Loader,
  TextInput,
  Container,
  Modal,
  Logotype,
  ToggleThemeButton,
  ToggleLanguegeButton,
  IUser,
  NumberInput,
  Portal
}

export {
  useAppDispatch,
  useTypedTranslation,
  useTheme
}

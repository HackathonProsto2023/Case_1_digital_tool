import { useTranslation } from 'react-i18next'

type IuseTypedTranslation = 'pageError' | 'header' | 'footer'

const useTypedTranslation = (type?: IuseTypedTranslation) => {
  return useTranslation(type)
}

export { useTypedTranslation }

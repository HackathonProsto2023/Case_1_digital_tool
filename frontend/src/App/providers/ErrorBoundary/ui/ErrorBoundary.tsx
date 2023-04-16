import React, { ReactNode, ErrorInfo, Suspense } from 'react'
import { PageError } from 'Widgets'

interface IProps {
  children: ReactNode
}

interface IState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
          <Suspense>
              <PageError/>
          </Suspense>
      )
    }
    return children
  }
}

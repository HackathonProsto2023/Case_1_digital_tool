import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App, ErrorBoundary, StoreProvider, ThemeProvider } from 'App'

import 'Shared/config/i18next/i18next'
import 'App/styles/index.scss'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>
)

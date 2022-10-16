import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { CoffesListContextProvider } from './contexts/CoffesListContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffesListContextProvider>
          <Router />
        </CoffesListContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

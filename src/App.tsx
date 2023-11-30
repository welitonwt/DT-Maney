import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transaction } from './pages/Transaction'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transaction />
      <GlobalStyle />
    </ThemeProvider>
  )
}

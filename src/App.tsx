import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transaction } from './pages/Transaction'
import { TransactionProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

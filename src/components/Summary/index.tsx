import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer, SummaryCard, SummaryCardTotal } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={'#00b37e'} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color={'#f75a68'} />
        </header>
        <strong>1.259,00</strong>
      </SummaryCard>

      <SummaryCardTotal variant="positive">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={'#fef6f6'} />
        </header>
        <strong>16.141,00</strong>
      </SummaryCardTotal>
    </SummaryContainer>
  )
}

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer, SummaryCard, SummaryCardTotal } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={'#00b37e'} />
        </header>
        <strong className="income">
          {priceFormatter.format(summary.income)}
        </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color={'#f75a68'} />
        </header>
        <strong className="outcome">
          - {priceFormatter.format(summary.outcome)}
        </strong>
      </SummaryCard>

      <SummaryCardTotal variant="positive">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={'#fef6f6'} />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCardTotal>
    </SummaryContainer>
  )
}

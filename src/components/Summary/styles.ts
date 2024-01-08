import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

export const SummaryCard = styled.div`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  .income {
    color: ${(props) => props.theme['green-300']};
  }

  .outcome {
    color: ${(props) => props.theme['red-300']};
  }
`
interface SummaryCardProps {
  variant?: 'positive' | 'negative'
}

export const SummaryCardTotal = styled(SummaryCard)<SummaryCardProps>`
  background: ${(props) =>
    props.variant === 'positive'
      ? props.theme['green-500']
      : props.theme['red-500']};
`

import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export function Search() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for a Transaction" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}

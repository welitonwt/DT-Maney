import { HeaderContainer, HeaderContent } from './styled'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Logotipo do Ignite" />
      </HeaderContent>
    </HeaderContainer>
  )
}

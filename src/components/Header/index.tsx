import {
  HeaderContainer,
  Navbar,
  ButtonContainer,
  LinkContainer,
  QuantityProductsContainer,
} from './styles'

import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo da Coffe Delivery" />

      <Navbar>
        <ButtonContainer>
          <MapPin size={22} />
          Porto Alegre
        </ButtonContainer>

        <LinkContainer href="">
          <ShoppingCart size={22} />

          <QuantityProductsContainer>0</QuantityProductsContainer>
        </LinkContainer>
      </Navbar>
    </HeaderContainer>
  )
}

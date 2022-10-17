import {
  HeaderContainer,
  Navbar,
  ButtonContainer,
  LinkContainer,
  QuantityProductsContainer,
} from './styles'

import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffesContext } from '../../contexts/CoffesListContext'

export function Header() {
  const { cartItems }: any = useContext(CoffesContext)
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

          <QuantityProductsContainer>
            {cartItems.length}
          </QuantityProductsContainer>
        </LinkContainer>
      </Navbar>
    </HeaderContainer>
  )
}

import {
  HeaderContainer,
  Navbar,
  ButtonContainer,
  QuantityProductsContainer,
} from './styles'

import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffesContext } from '../../contexts/CoffesListContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartItems }: any = useContext(CoffesContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo da Coffe Delivery" />
      </NavLink>

      <Navbar>
        <ButtonContainer>
          <MapPin size={22} />
          Porto Alegre
        </ButtonContainer>

        <NavLink to="/checkout">
          <ShoppingCart size={22} />

          <QuantityProductsContainer>
            {cartItems.length}
          </QuantityProductsContainer>
        </NavLink>
      </Navbar>
    </HeaderContainer>
  )
}

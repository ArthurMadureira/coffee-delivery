import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffesContext } from '../../../../contexts/CoffesListContext'
import { QuantityInput } from './components/QuantityInput'
import {
  ActionElementsContainer,
  PriceText,
  RemoveButton,
  SelectedCoffeeCard,
  SelectedCoffeeCardBox,
  SelectedCoffeesContainer,
} from './styled'

export function SelectedCoffees({ cartItem }: any) {
  const { removeCoffeeFromCart } = useContext(CoffesContext)
  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeeCard>
        <img src={`/coffesImages/${cartItem.imgUrl}.png`} alt="" />

        <SelectedCoffeeCardBox>
          <header>
            <h4>{cartItem.name}</h4>
          </header>

          <ActionElementsContainer>
            <QuantityInput quantity={cartItem.quantity} />
            <RemoveButton onClick={() => removeCoffeeFromCart(cartItem.id)}>
              <Trash size={14} color="#8047F8" />
              <span>Remover</span>
            </RemoveButton>
          </ActionElementsContainer>
        </SelectedCoffeeCardBox>

        <PriceText>R$ {cartItem.price}</PriceText>
      </SelectedCoffeeCard>
    </SelectedCoffeesContainer>
  )
}

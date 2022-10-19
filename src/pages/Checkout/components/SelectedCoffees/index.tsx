import { QuantityInput } from './components/QuantityInput'
import {
  ActionElementsContainer,
  PriceText,
  SelectedCoffeeCard,
  SelectedCoffeeCardBox,
  SelectedCoffeesContainer,
} from './styled'

export function SelectedCoffees({ cartItem, setTotalPrice }: any) {
  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeeCard>
        <img src={`/coffesImages/${cartItem.imgUrl}.png`} alt="" />

        <SelectedCoffeeCardBox>
          <header>
            <h4>{cartItem.name}</h4>
          </header>

          <ActionElementsContainer>
            <QuantityInput />
          </ActionElementsContainer>
        </SelectedCoffeeCardBox>

        <PriceText>R$ {cartItem.price}</PriceText>
      </SelectedCoffeeCard>
    </SelectedCoffeesContainer>
  )
}

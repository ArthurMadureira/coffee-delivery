import { QuantityInput } from './components/QuantityInput'
import {
  ActionElementsContainer,
  PriceText,
  SelectedCoffeeCard,
  SelectedCoffeeCardBox,
  SelectedCoffeesContainer,
} from './styled'

export function SelectedCoffees({ cartItem }: any) {
  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeeCard>
        <img src={`/coffesImages/Arab.png`} alt="" />

        <SelectedCoffeeCardBox>
          <header>
            <h4>Expresso tradicional</h4>
          </header>

          <ActionElementsContainer>
            <QuantityInput />
          </ActionElementsContainer>
        </SelectedCoffeeCardBox>

        <PriceText>R$ 9,90</PriceText>
      </SelectedCoffeeCard>
    </SelectedCoffeesContainer>
  )
}

import { FormOrder } from './components/FormOrder'
import { Payment } from './components/Payment'
import { SelectedCoffees } from './components/SelectedCoffees'
import {
  ButtonSubmit,
  CheckoutContainer,
  CoffeesSelected,
  CompleteOrder,
  PriceInfosContainer,
  SelectedCoffeesContainer,
  Total,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
        <FormOrder />
        <Payment />
      </CompleteOrder>

      <CoffeesSelected>
        <h2>Cafés Selecionados</h2>
        <SelectedCoffeesContainer>
          <div>
            <SelectedCoffees />
            <SelectedCoffees />
          </div>

          <PriceInfosContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,90</span>
            </div>
            <div>
              <span>Entraga</span>
              <span>R$ 3,50</span>
            </div>

            <Total>
              <span>Total</span>
              <span>R$ 33,20</span>
            </Total>
            <ButtonSubmit>
              <span>Confirmar Pedido</span>
            </ButtonSubmit>
          </PriceInfosContainer>
        </SelectedCoffeesContainer>
      </CoffeesSelected>
    </CheckoutContainer>
  )
}

import { FormOrder } from './components/FormOrder'
import { CheckoutContainer, CompleteOrder } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>

        <FormOrder />
      </CompleteOrder>
    </CheckoutContainer>
  )
}

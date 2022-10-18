import { FormOrder } from './components/FormOrder'
import { Payment } from './components/Payment'
import { CheckoutContainer, CompleteOrder } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <h2>Complete seu pedido</h2>
      <CompleteOrder>
        <FormOrder />
        <Payment />
      </CompleteOrder>
    </CheckoutContainer>
  )
}

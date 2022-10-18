import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  CheckoutContainer,
  PaymentTypeButton,
  PaymentTypeContainer,
} from './styles'

export function Payment() {
  return (
    <CheckoutContainer>
      <header>
        <h3>
          <CurrencyDollar size={20} color="#8047f8" />
          Pagamento
        </h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </header>

      <PaymentTypeContainer>
        <PaymentTypeButton type="button">
          <CreditCard size={16} color="#8047f8" />
          Cartão de Crédito
        </PaymentTypeButton>
        <PaymentTypeButton>
          <Bank size={16} color="#8047f8" />
          Cartão de Débito
        </PaymentTypeButton>
        <PaymentTypeButton>
          <Money size={16} color="#8047f8" />
          Dinheiro
        </PaymentTypeButton>
      </PaymentTypeContainer>
    </CheckoutContainer>
  )
}

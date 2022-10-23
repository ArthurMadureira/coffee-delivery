import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  CheckoutContainer,
  PaymentTypeButton,
  PaymentTypeContainer,
} from './styles'

export function Payment({ setPaymentMethod }: any) {
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
        <PaymentTypeButton
          type="button"
          onClick={(e) => setPaymentMethod(e.target.textContent)}
        >
          <CreditCard size={16} color="#8047f8" />
          Cartão de Crédito
        </PaymentTypeButton>
        <PaymentTypeButton
          onClick={(e) => setPaymentMethod(e.target.textContent)}
        >
          <Bank size={16} color="#8047f8" />
          Cartão de Débito
        </PaymentTypeButton>
        <PaymentTypeButton
          onClick={(e) => setPaymentMethod(e.target.textContent)}
        >
          <Money size={16} color="#8047f8" />
          Dinheiro
        </PaymentTypeButton>
      </PaymentTypeContainer>
    </CheckoutContainer>
  )
}

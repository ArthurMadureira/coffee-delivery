import { Info, OrderInfos, SuccessContainer, Header, Container } from './styles'

import SuccessImage from '../../assets/Success.png'

interface SuccessProps {
  street: string
  number: number
  district: string
  city: string
  setIsOpen: boolean
}

export function Success({
  street,
  number,
  district,
  city,
  setIsOpen,
}: SuccessProps) {
  return (
    <Container>
      <SuccessContainer>
        <div>
          <Header>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </Header>

          <OrderInfos>
            <Info>
              <div>
                <p>
                  Entrega em{' '}
                  <span>
                    {street}, {number}
                  </span>
                </p>
                <p>
                  {district} - {city}
                </p>
              </div>
            </Info>
            <Info>
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min </p>
              </div>
            </Info>
            <Info>
              <div>
                <p>Pagamento na entrega</p>
                <p>Cartão de Crédito</p>
              </div>
            </Info>
          </OrderInfos>
        </div>

        <img src={SuccessImage} alt="" />
      </SuccessContainer>
    </Container>
  )
}

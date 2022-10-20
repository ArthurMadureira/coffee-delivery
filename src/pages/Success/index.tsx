import { Info, OrderInfos, SuccessContainer, Header } from './styles'

import SuccessImage from '../../assets/Success.png'

export function Success() {
  return (
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
  )
}

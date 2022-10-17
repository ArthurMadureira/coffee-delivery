import { Form } from './Form'
import { FormContainer } from './styles'

export function FormOrder() {
  return (
    <FormContainer>
      <header>
        <h2>Endereço de Entrega</h2>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </header>

      <Form />
    </FormContainer>
  )
}

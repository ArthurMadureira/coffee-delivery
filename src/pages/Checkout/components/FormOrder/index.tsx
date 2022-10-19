import { Form } from './Form'
import { FormContainer } from './styles'

export function FormOrder({ register, watch }: any) {
  return (
    <FormContainer>
      <header>
        <h2>Endereço de Entrega</h2>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </header>

      <Form register={register} watch={watch} />
    </FormContainer>
  )
}

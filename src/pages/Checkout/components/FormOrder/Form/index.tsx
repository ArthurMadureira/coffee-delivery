import { InputContainer } from './style'

export function Form() {
  return (
    <form>
      <InputContainer className="cep">
        <input type="number" placeholder="CEP" required />
      </InputContainer>

      <InputContainer className="street">
        <input type="text" placeholder="Rua" required />
      </InputContainer>

      <InputContainer className="grid-1">
        <input type="text" placeholder="Número" required />
        <input type="text" placeholder="Complemento(opcional)" />
      </InputContainer>

      <InputContainer className="place-infos">
        <input type="text" placeholder="Bairro" required />
        <input type="text" placeholder="Cidade" required />
        <input type="text" placeholder="UF" required />
      </InputContainer>
    </form>
  )
}

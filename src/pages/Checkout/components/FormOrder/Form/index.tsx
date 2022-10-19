import { InputContainer } from './style'

export function Form({ register }: any) {
  return (
    <>
      <InputContainer className="cep">
        <input type="number" placeholder="CEP" required {...register('cep')} />
      </InputContainer>

      <InputContainer className="street">
        <input type="text" placeholder="Rua" required {...register('street')} />
      </InputContainer>

      <InputContainer className="grid-1">
        <input
          type="number"
          placeholder="Número"
          required
          {...register('number')}
        />
        <input type="text" placeholder="Complemento(opcional)" />
      </InputContainer>

      <InputContainer className="place-infos">
        <input
          type="text"
          placeholder="Bairro"
          required
          {...register('district')}
        />
        <input
          type="text"
          placeholder="Cidade"
          required
          {...register('city')}
        />
        <input type="text" placeholder="UF" maxLength={2} required />
      </InputContainer>
    </>
  )
}

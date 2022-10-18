import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityContainer } from './styles'

export function QuantityInput({ quantity }: any) {
  return (
    <div>
      <QuantityContainer>
        <IconWrapper type="button">
          <Minus size={14} weight="fill" />
        </IconWrapper>
        <span>1</span>
        <IconWrapper type="button">
          <Plus size={14} weight="fill" />
        </IconWrapper>
      </QuantityContainer>
    </div>
  )
}

import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityContainer } from './styles'

interface QuantityInputProps {
  onIncrease?: () => void
  onDecrease?: () => void
  quantity: number
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <div>
      <QuantityContainer>
        <IconWrapper
          type="button"
          disabled={quantity <= 1}
          onClick={onDecrease}
        >
          <Minus size={14} weight="fill" />
        </IconWrapper>
        <span>{quantity}</span>
        {/* <input type="number" readOnly value={quantity} min={0} /> */}
        <IconWrapper type="button" onClick={onIncrease}>
          <Plus size={14} weight="fill" />
        </IconWrapper>
      </QuantityContainer>
    </div>
  )
}

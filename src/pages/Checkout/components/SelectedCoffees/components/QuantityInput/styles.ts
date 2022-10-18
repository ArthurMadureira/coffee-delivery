import styled from 'styled-components'

export const QuantityContainer = styled.div`
  flex: 1;
  width: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-900']};

  padding: 0.5rem 0.6rem;

  border-radius: 6px;

  input {
    background: transparent;
    border: 0;
    width: 100%;
    margin: auto;
  }
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme['purple-500']};
  transition: 0.4s;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
  }
`

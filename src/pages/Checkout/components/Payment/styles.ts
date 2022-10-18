import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-100']};

  header {
    margin-bottom: 2rem;

    h3 {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-weight: 400;
      line-height: 160%;
    }

    p {
      color: ${(props) => props.theme['gray-700']};
      line-height: 160%;
    }
  }
`

export const PaymentTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const PaymentTypeButton = styled.button`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.35rem;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-700']};

  border: 0;
  border-radius: 6px;
  transition: background 0.2s;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }

  &.selected {
    color: red;
  }

  svg path {
    fill: ${(props) => props.theme['purple-500']};
  }
`

import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 640px;
  h2 {
    font-family: 'Baloo 2';
    font-size: 1.525rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const AddressContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
`

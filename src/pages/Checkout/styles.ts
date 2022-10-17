import styled from 'styled-components'

export const CompleteOrder = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-size: 1.525rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const CheckoutContainer = styled.div`
  width: 640px;
`

export const AddressContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
`

import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

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

export const SelectedCoffeesContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px 6px 44px;
`

export const CoffeesSelected = styled.div``

export const PriceInfosContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const Total = styled.span`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['gray-800']};
`

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;

  border: 0;
  border-radius: 6px;

  width: 80%;
  height: 2.875rem;
  padding: 0.75rem 0.5rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-500']};

  font-weight: 700;

  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`

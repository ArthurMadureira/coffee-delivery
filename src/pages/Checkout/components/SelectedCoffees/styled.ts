import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px 6px 44px;
`

export const SelectedCoffeeCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  padding-bottom: 1.5rem;

  img {
    width: 5rem;
    height: 5rem;
  }
`

export const SelectedCoffeeCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ActionElementsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  padding: 0.5rem 0.6rem;

  border-radius: 6px;

  border: 0;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-900']};

  cursor: pointer;
`

export const PriceText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`

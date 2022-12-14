import styled from 'styled-components'

export const CoffesListContainer = styled.div`
  margin-top: 6rem;
  /* display: flex; */
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 6rem 4rem;

  h3 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-800']};
  }

  @media (max-width: 1300px) {
    display: flex;
    flex-wrap: wrap;
    overflow-x: hidden;
  }
`

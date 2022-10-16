import styled from 'styled-components'

export const CoffesListContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  gap: 6rem 4rem;
  flex-wrap: wrap;

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
`

export const CoffeeContainer = styled.div`
  position: relative;
  width: 16rem;
  padding: 3rem 1.25rem;
  background: ${(props) => props.theme['gray-100']};

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px 6px 36px;

  img {
    position: absolute;
    top: -75px;
  }
`

export const CategoriesList = styled.ul`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 30px;

  li {
    background: ${(props) => props.theme['yellow-100']};
    padding: 0.5rem 0.45rem;
    border-radius: 100px;
    height: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['yellow-700']};
    font-weight: 700;
  }
`

export const CardFooter = styled.div`
  margin-top: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`

export const Price = styled.p`
  color: ${(props) => props.theme['gray-700']};

  span:nth-child(1) {
    font-size: 0.875rem;
  }
  span:nth-child(2) {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: ${(props) => props.theme['gray-300']};

  padding: 0.5rem 0.6rem;

  border-radius: 6px;

  button {
    background-color: transparent;
    border: 0;
    font-size: 1.5rem;
    color: ${(props) => props.theme['purple-500']};

    cursor: pointer;
  }
`

export const ShopCartButton = styled.button`
  background: ${(props) => props.theme['purple-800']};
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  svg path,
  svg circle {
    fill: ${(props) => props.theme.white};
    stroke: ${(props) => props.theme.white};
  }
`

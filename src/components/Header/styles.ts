import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 2rem;

  margin-bottom: 5.8rem;
  width: 80vw;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};
  z-index: 10000000000;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    position: relative;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};

    display: flex;
    align-items: center;
    justify-content: center;

    svg path {
      fill: ${(props) => props.theme['yellow-700']};
    }
  }
`

export const ButtonContainer = styled.button`
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-100']};

  color: ${(props) => props.theme['purple-800']};

  padding: 0.625rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const QuantityProductsContainer = styled.span`
  color: ${(props) => props.theme.white};
  border-radius: 100%;

  position: absolute;
  top: -10px;
  right: -15px;

  background-color: ${(props) => props.theme['yellow-700']};

  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

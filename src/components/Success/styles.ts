import styled from 'styled-components'

export const Container = styled.div``

export const SuccessContainer = styled.div`
  background: ${(props) => props.theme.background};

  position: absolute;
  left: 0%;
  bottom: 0%;

  width: 100vw;
  height: 100vh;
  /* transform: translateX(-50%) translateY(-20%); */
  /* transform: translateY(-50%); */
  padding-bottom: 20rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6.375rem;
`

export const Header = styled.header`
  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-700']};
  }

  > div > p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const OrderInfos = styled.div`
  position: relative;
  border: 1px solid transparent;

  width: 32.875rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.8125rem;
  margin-top: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 2px;
    background: linear-gradient(45deg, #dbac2c, #8047f8);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  p {
    font-weight: 500;
    color: ${(props) => props.theme['gray-700']};
  }

  p span {
    font-weight: 800;
  }
`

export const Info = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`

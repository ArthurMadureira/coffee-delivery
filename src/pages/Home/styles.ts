import styled from 'styled-components'

export const HomeContainer = styled.div``

export const IntroductionContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  align-items: flex-start;

  width: 90vw;

  margin-bottom: 8.75rem;
  padding-top: 10rem;

  img.big-coffee {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media (max-width: 1150px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    margin-left: 2rem;
    margin-right: 2rem;

    img.big-coffee {
      width: 27.75rem;
      height: 20.5rem;
      transform: translateX(-15%);
      object-fit: cover;
    }
  }
`

export const LeftSideContainer = styled.div`
  h2 {
    font-size: 4rem;
    font-family: 'Baloo 2';
    line-height: 130%;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-size: 1.25rem;
    max-width: 36.75rem;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 4.125rem;
  }

  @media (max-width: 1150px) {
    h2 {
      font-size: 2.5rem;
      max-width: 30rem;
    }

    p {
      max-width: 30rem;
    }
  }
`

export const BenefitsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 567px;

  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const CoffesListSection = styled.section``

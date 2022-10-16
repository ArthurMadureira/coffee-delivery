import styled from 'styled-components'

export const HomeContainer = styled.div``

export const IntroductionContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  align-items: flex-start;

  margin-bottom: 8.75rem;
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
    max-width: 588px;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 4.125rem;
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
    align-items: center;
    gap: 0.8rem;
  }
`

export const CoffesListSection = styled.section``

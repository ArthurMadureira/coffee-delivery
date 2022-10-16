import {
  BenefitsList,
  CoffesListSection,
  HomeContainer,
  IntroductionContainer,
  LeftSideContainer,
} from './styles'

import BigCoffee from '../../assets/BigCoffee.png'
import Icon from '../../assets/BenefitImg/Icon.svg'
import Icon2 from '../../assets/BenefitImg/Icon2.svg'
import Icon3 from '../../assets/BenefitImg/Icon3.svg'
import Icon4 from '../../assets/BenefitImg/Icon4.svg'
import { CoffesList } from './components/CoffesList'

export function Home() {
  return (
    <HomeContainer>
      <IntroductionContainer>
        <LeftSideContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BenefitsList>
            <span>
              <img src={Icon2} alt="" />
              Compra simples e segura
            </span>

            <span>
              <img src={Icon} alt="" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <img src={Icon3} alt="" />
              Entrega rápida e rastreada
            </span>
            <span>
              <img src={Icon4} alt="" />
              {''}O café chega fresquinho até você
            </span>
          </BenefitsList>
        </LeftSideContainer>
        <img src={BigCoffee} alt="" />
      </IntroductionContainer>

      <CoffesListSection>
        <h2>Nossos Cafés</h2>

        <CoffesList />
      </CoffesListSection>
    </HomeContainer>
  )
}

import { useContext } from 'react'
import {
  CoffesContext,
  CoffeesListContextDataType,
} from '../../../../contexts/CoffesListContext'

import { CoffesListContainer } from './styles'

import { CoffeeCard } from '../CoffeeCard'

interface CoffesContextProp {
  coffesListObj: any
}

export function CoffesList() {
  const { coffesListObj }: CoffesContextProp = useContext(CoffesContext)

  // function increaseQuantity(coffee: CoffeesListContextDataType) {
  //   coffee.quantity += 1
  // }

  return (
    <CoffesListContainer>
      {coffesListObj.map((coffee: CoffeesListContextDataType) => {
        return (
          <CoffeeCard
            key={coffee.imgUrl}
            coffee={coffee}
            img={`coffesImages/${coffee.imgUrl}.png`}
          />
        )
      })}
    </CoffesListContainer>
  )
}

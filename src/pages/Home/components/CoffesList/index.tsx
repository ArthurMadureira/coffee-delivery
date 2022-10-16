import { useContext } from 'react'
import {
  CoffesContext,
  CoffeesListContextDataType,
} from '../../../../contexts/CoffesListContext'

import {
  CardFooter,
  CategoriesList,
  CoffeeContainer,
  CoffesListContainer,
  Price,
  Quantity,
  ShopCartButton,
} from './styles'

import { ShoppingCartSimple } from 'phosphor-react'

import TradicionalCoffee from '../../../../assets/CoffesImages/TradicionalCoffee.png'

interface CoffesContextProp {
  coffes: CoffeesListContextDataType[]
  setCoffeeQuantity: any
  coffeeQuantity: number
}

export function CoffesList() {
  const { coffes }: CoffesContextProp = useContext(CoffesContext)

  function increaseQuantity(coffee: CoffeesListContextDataType) {
    coffee.quantity += 1
  }

  return (
    <CoffesListContainer>
      {coffes.map((coffee: CoffeesListContextDataType) => {
        return (
          <CoffeeContainer key={coffee.id}>
            <img src={TradicionalCoffee} alt="" />

            <CategoriesList>
              {coffee.categories.map((categorie) => {
                return <li key={categorie}>{categorie}</li>
              })}
            </CategoriesList>

            <h3>{coffee.name}</h3>

            <p>{coffee.subtitle}</p>

            <CardFooter>
              <Price>
                <span>R$</span>
                <span>{coffee.price}</span>
              </Price>

              <Quantity>
                <button>-</button>
                <span>{coffee.quantity}</span>
                <button onClick={() => increaseQuantity(coffee)}>+</button>
              </Quantity>
              <ShopCartButton>
                <ShoppingCartSimple size={32} />
              </ShopCartButton>
            </CardFooter>
          </CoffeeContainer>
        )
      })}
    </CoffesListContainer>
  )
}

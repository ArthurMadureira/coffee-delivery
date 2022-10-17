import {
  CardFooter,
  CategoriesList,
  CoffeeContainer,
  Price,
  Quantity,
  ShopCartButton,
} from './styles'

import { CoffeesListContextDataType } from '../../../../contexts/CoffesListContext'
import { ShoppingCartSimple } from 'phosphor-react'

interface CoffeeProps {
  coffee: CoffeesListContextDataType
  img: string
}

export function CoffeeCard({ coffee, img }: CoffeeProps) {
  return (
    <CoffeeContainer key={coffee.id}>
      <img src={img} alt="" />

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
          <button>+</button>
        </Quantity>
        <ShopCartButton>
          <ShoppingCartSimple size={32} />
        </ShopCartButton>
      </CardFooter>
    </CoffeeContainer>
  )
}

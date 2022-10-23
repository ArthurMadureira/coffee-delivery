import {
  CardFooter,
  CategoriesList,
  CoffeeContainer,
  Price,
  ShopCartButton,
} from './styles'

import {
  CoffeesListContextDataType,
  CoffesContext,
} from '../../../../contexts/CoffesListContext'
import { ShoppingCartSimple } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useContext, useState } from 'react'

interface CoffeeProps {
  coffee: CoffeesListContextDataType
  img: string
}

interface CoffesContextProp {
  addCoffeeToCart: (coffee: CoffeesListContextDataType) => void
}

export function CoffeeCard({ coffee, img }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart }: CoffesContextProp = useContext(CoffesContext)

  function handleIncrease() {
    setQuantity((state: any) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state: any) => state - 1)
  }

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }

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

        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />

        <ShopCartButton onClick={handleAddCoffeeToCart}>
          <ShoppingCartSimple size={32} />
        </ShopCartButton>
      </CardFooter>
    </CoffeeContainer>
  )
}

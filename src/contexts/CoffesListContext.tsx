import { createContext, ReactNode, useState } from 'react'
import { produce } from 'immer'

import { coffees } from '../data/coffee'

export interface CoffeesListContextDataType {
  id: number
  imgUrl: string
  categories: string[]
  name: string
  subtitle: string
  price: string
  quantity: number
}

export const CoffesContext: any = createContext(
  {} as CoffeesListContextDataType,
)

interface CoffesListContextProps {
  children: ReactNode
}

const coffesListObj = coffees

export function CoffesListContextProvider({
  children,
}: CoffesListContextProps) {
  const [cartItems, setCartItems] = useState<CoffeesListContextDataType[]>([])

  function addCoffeeToCart(coffee: CoffeesListContextDataType) {
    const coffeAlreadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExists < 0) {
        draft.push(coffee)
      } else {
        draft[coffeAlreadyExists].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  return (
    <CoffesContext.Provider
      value={{
        coffesListObj,
        cartItems,
        setCartItems,
        addCoffeeToCart,
      }}
    >
      {children}
    </CoffesContext.Provider>
  )
}

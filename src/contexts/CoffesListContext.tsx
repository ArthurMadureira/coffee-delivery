import { createContext, ReactNode, useState } from 'react'

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
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)
  const [shopCart, setShopCart] = useState([])

  return (
    <CoffesContext.Provider
      value={{
        coffesListObj,
        coffeeQuantity,
        setCoffeeQuantity,
        shopCart,
        setShopCart,
      }}
    >
      {children}
    </CoffesContext.Provider>
  )
}

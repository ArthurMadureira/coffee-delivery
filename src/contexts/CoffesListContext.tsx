import { createContext, ReactNode, useState } from 'react'

export interface CoffeesListContextDataType {
  id: number
  coffeImgUrl: string
  categories: string[]
  name: string
  subtitle: string
  price: string
  quantity: number
}

export const CoffesContext: any = createContext(
  {} as CoffeesListContextDataType,
)

const coffes = [
  {
    id: 1,
    coffeImgUrl: 'TradicionalCoffeepng',
    categories: ['Tradicional'],
    name: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 2,
    coffeImgUrl: 'AmericanCoffee',
    categories: ['Tradicional'],
    name: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 3,
    coffeImgUrl: 'CreamyCoffee',
    categories: ['Tradicional'],
    name: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 4,
    coffeImgUrl: 'ColdCoffee',
    categories: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 5,
    coffeImgUrl: 'CoffeeWithMilk',
    categories: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 6,
    coffeImgUrl: 'Latte',
    categories: ['Tradicional', 'Com leite'],
    name: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 7,
    coffeImgUrl: 'Capuccino',
    categories: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 8,
    coffeImgUrl: 'Mocaccino',
    categories: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 9,
    coffeImgUrl: 'HotChocolate',
    categories: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 10,
    coffeImgUrl: 'Cuban',
    categories: ['Especial', 'Alcoólico', 'Com leite'],
    name: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 11,
    coffeImgUrl: 'Havaian',
    categories: ['Especial'],
    name: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 12,
    coffeImgUrl: 'Arab',
    categories: ['Especial'],
    name: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    quantity: 1,
  },
  {
    id: 13,
    coffeImgUrl: 'Irland',
    categories: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    quantity: 1,
  },
]

interface CoffesListContextProps {
  children: ReactNode
}

export function CoffesListContextProvider({
  children,
}: CoffesListContextProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)
  const [shopCart, setShopCart] = useState([])

  return (
    <CoffesContext.Provider
      value={{
        coffes,
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

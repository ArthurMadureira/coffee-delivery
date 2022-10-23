import { useContext, useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { FormOrder } from './components/FormOrder'
import { Payment } from './components/Payment'
import { SelectedCoffees } from './components/SelectedCoffees'
import {
  ButtonSubmit,
  CheckoutContainer,
  CoffeesSelected,
  CompleteOrder,
  PriceInfosContainer,
  SelectedCoffeesContainer,
  Total,
} from './styles'
import { CoffesContext } from '../../contexts/CoffesListContext'
import { Success } from '../../components/Success'

const formValidationSchema = zod.object({
  cep: zod.number().min(14, 'CPF inválido').max(14, 'CPF inválido'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número'),
  district: zod.string().min(1, 'Informe seu bairro'),
  city: zod
    .string()
    .min(1, 'Informe sua cidade')
    .max(2, 'O campo de cidade deve ter no mínimo dois caracteres'),
})

type FormData = zod.infer<typeof formValidationSchema>

export function Checkout() {
  const form = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      street: '',
      district: '',
      city: '',
    },
  })

  const { cartItems, setCartItems } = useContext<any>(CoffesContext)

  const { register, handleSubmit, watch, reset } = form

  function onSubmit() {
    reset()
  }

  const cep = watch('cep')
  const street = watch('street')
  const number = watch('number')
  const district = watch('district')
  const city = watch('city')

  const isCompleted = !cep || !street || !number || !district || !city

  const [totalPrice, setTotalPrice] = useState<any>([])
  const [isOpen, setIsOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('Cartão de credito')

  console.log(paymentMethod)

  useEffect(() => {
    const sumWithInitial = cartItems
      ?.map((item: any) => item.price)
      .reduce(
        (previousValue: number, currentValue: number) =>
          previousValue + currentValue,
        0,
      )
    setTotalPrice(sumWithInitial)
  }, [cartItems])

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <CheckoutContainer>
        <CompleteOrder>
          <h2>Complete seu pedido</h2>
          <FormProvider {...form}>
            <FormOrder register={register} watch={watch} />
          </FormProvider>
          <Payment setPaymentMethod={setPaymentMethod} />
        </CompleteOrder>

        <CoffeesSelected>
          <h2>Cafés Selecionados</h2>
          <SelectedCoffeesContainer>
            <div>
              {cartItems?.map((item: any) => {
                return (
                  <SelectedCoffees
                    key={item.id}
                    setCartItems={setCartItems}
                    cartItem={item}
                    setTotalPrice={setTotalPrice}
                    setPaymentMethod={setPaymentMethod}
                  />
                )
              })}
            </div>

            <PriceInfosContainer>
              <div>
                <span>Total de itens</span>
                <span>R$ {totalPrice ?? 0}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>

              <Total>
                <span>Total</span>
                <span>R$ {totalPrice * cartItems.length + 3.5}</span>
              </Total>

              <ButtonSubmit
                disabled={isCompleted}
                onClick={() => setIsOpen(true)}
              >
                <span>Confirmar Pedido</span>
              </ButtonSubmit>
            </PriceInfosContainer>
          </SelectedCoffeesContainer>
        </CoffeesSelected>
      </CheckoutContainer>
      {isOpen && (
        <Success
          street={street}
          number={number}
          district={district}
          city={city}
          paymentMethod={paymentMethod}
        />
      )}
    </form>
  )
}

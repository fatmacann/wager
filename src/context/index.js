import React, { createContext, useState, useMemo, useCallback } from 'react'

export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([])

  // if exist bet, remove it
  const addNewBet = useCallback(
    payload => {
      const data = basket.filter(q => q.id === payload.id)

      let newBasket = []

      if (data) {
        newBasket = basket.filter(q => q.id !== payload.id)
      } else {
        newBasket = [...basket]
      }

      setBasket([...newBasket, payload])
    },
    [basket]
  )

  const clearAll = useCallback(() => {
    setBasket([])
  }, [])

  const totalPrice = useMemo(() => {
    return basket.reduce((acc, curr) => {
      return acc + +curr.price
    }, 0)
  }, [basket])

  const memoValues = useMemo(
    () => ({ basket, setBasket, addNewBet, totalPrice, clearAll }),
    [addNewBet, basket, totalPrice, clearAll]
  )

  return (
    <BasketContext.Provider value={memoValues}>
      {children}
    </BasketContext.Provider>
  )
}

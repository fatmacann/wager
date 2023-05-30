import React, { useContext } from 'react'
import { BasketContext } from '../context'

export default function Basket() {
  const { basket, totalPrice, clearAll } = useContext(BasketContext)

  return (
    <div className="basket-wrapper">
      {basket.length > 0 && (
        <div className="basket-item-wraper">
          {basket.map((item, index) => (
            <div key={index} className="basket-item">
              <span>
                {item.mbs} Kod : {item.code}
              </span>
              <span> Maç : {item.mac} </span>
              <span> Oran : {item.price} </span>
            </div>
          ))}
        </div>
      )}
      <span className="basket-total">Toplam: {totalPrice.toFixed(2)} TL</span>

      {basket.length > 0 && (
        <button className="basket-button" onClick={clearAll}>
          X
        </button>
      )}
    </div>
  )
}

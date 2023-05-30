import React, { useContext } from 'react'
import { BasketContext } from '../context'
import cx from 'classnames'

export default function TableItem({ item }) {
  const { basket, addNewBet } = useContext(BasketContext)

  const handleBasket = prop => {
    const payload = {
      id: item.id,
      mac: item.mac,
      mbs: item.mbs,
      code: item.code,
      price: item[prop],
      prop: prop
    }
    addNewBet(payload)
  }

  const isExist = basket.find(q => q.id === item.id)

  const renderTableCell = (prop, text) => {
    return (
      <td
        className={cx('selectable', {
          selected: isExist && isExist.prop === prop
        })}
        onClick={() => handleBasket(prop)}
      >
        {text}
      </td>
    )
  }

  return (
    <>
      <tr>
        <td>{`${item.date} ${item.day} ${item.ln}`}</td>
        <td>Yorumlar</td>
        <td></td>
        <td>1</td>
        <td>X</td>
        <td>2</td>
        <td>Alt</td>
        <td>Ust</td>
        <td>H1</td>
        <td>1</td>
        <td>X</td>
        <td>2</td>
        <td>H2</td>
        <td>1-X</td>
        <td>1-2</td>
        <td>X-2</td>
        <td>Var</td>
        <td>yok</td>
        <td>+99</td>
      </tr>
      <tr>
        <td>{item.mac}</td>
        <td></td>
        <td>{item.mbs}</td>
        {renderTableCell('mc1', item.mc1)}
        {renderTableCell('mc2', item.mc2)}
        <td></td>
        {renderTableCell('ikiBucukAlt', item.ikiBucukAlt)}
        {renderTableCell('ikiBucukUst', item.ikiBucukUst)}
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        {renderTableCell('cifteSans1X', item.cifteSans1X)}
        {renderTableCell('cifteSans12', item.cifteSans12)}
        {renderTableCell('cifteSansX2', item.cifteSansX2)}
        <td></td>
      </tr>
    </>
  )
}

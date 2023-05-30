import React, { useState } from 'react'
import TableItem from './table-item'

export default function Table({ data }) {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(1000)

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target
    const tableHeight = scrollHeight - clientHeight
    const scrollFraction = scrollTop / tableHeight
    const visibleRows = Math.ceil(clientHeight / 10) // Assuming each row is 30px tall
    const totalRows = data.length

    const newStartIndex = Math.floor(scrollFraction * (totalRows - visibleRows))
    const newEndIndex = newStartIndex + visibleRows

    setStartIndex(newStartIndex)
    setEndIndex(newEndIndex)
  }

  const visibleData = data.slice(startIndex, endIndex)

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: '100vh',
        overflowY: 'scroll'
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Event Count {data.length}</th>
            <th>Yorumlar</th>
            <th></th>
            <th>1</th>
            <th>X</th>
            <th>2</th>
            <th>Alt</th>
            <th>Ust</th>
            <th>H1</th>
            <th>1</th>
            <th>X</th>
            <th>2</th>
            <th>H2</th>
            <th>1-X</th>
            <th>1-2</th>
            <th>X-2</th>
            <th>Var</th>
            <th>yok</th>
            <th>+99</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

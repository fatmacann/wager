import React, { useEffect, useState } from 'react'
import { getBets } from './utils/api'
import Table from './components/table'
import Basket from './components/basket'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const localData = localStorage.getItem('data')

    if (localData) {
      setData(JSON.parse(localData))
      setLoading(false)
    } else {
      getBets().then(res => {
        setData(res)
        localStorage.setItem('data', JSON.stringify(res))
        setLoading(false)
      })
    }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Table
        data={data.map(item => ({
          ln: item.LN,
          id: item.C,
          date: item.D,
          day: item.DAY,
          time: item.T,
          lig: item.LN,
          mac: item.N,
          mbs: item.OCG[1].MBS,
          mc1: item.OCG[1].OC[0].O,
          mc2: item.OCG[1].OC[1].O,
          ikiBucukAlt: item.OCG[5].OC[25].O,
          ikiBucukUst: item.OCG[5].OC[26].O,
          cifteSans1X: item.OCG[2].OC[3].O,
          cifteSans12: item.OCG[2].OC[4].O,
          cifteSansX2: item.OCG[2].OC[5].O
        }))}
      />
      <Basket />
    </>
  )
}

export default App

import { createContext, useEffect, useState } from 'react'
export const Mycontext = createContext()
const DataProvider = ({ children }) => {
  const [poke, setPoke] = useState([])
  // get 10 pokemones
  const getPerso = async () => {
    try {
      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      )
      const data = await res.json()
      // get details
      const promises = data.results.map(async (item) => {
        const res = await fetch(item.url)
        const data = await res.json()
        return data
      })
      const results = await Promise.all(promises)
      setPoke(results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPerso()
  }, [])

  const globalData = {
    poke,
    setPoke
  }

  return (
    <Mycontext.Provider value={{ poke, setPoke }}>{children}</Mycontext.Provider>
  )
}

export default DataProvider

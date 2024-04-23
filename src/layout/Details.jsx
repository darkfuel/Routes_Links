import { useEffect, useState } from 'react'
import CardPoke from '../components/CardPoke'
import { useParams } from 'react-router-dom'
const Details = () => {
  const { name } = useParams()
  const [personaje, setPersonaje] = useState([])
  const [image, setImage] = useState({})
  const getSelect = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      const { id, weight, height, base_experience, sprites } = data
      setPersonaje({ name, id, weight, height, base_experience })
      setImage(sprites)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSelect()
  }, [])
  return (
    <div className='center-block'>
      <CardPoke personaje={personaje} image={image} />
    </div>
  )
}

export default Details

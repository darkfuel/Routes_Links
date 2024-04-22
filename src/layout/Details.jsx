import { useContext } from 'react'
import { Mycontext } from '../context/my_context'
import CardPoke from '../components/CardPoke'

const Details = () => {
  const { poke } = useContext(Mycontext)
  console.log(poke)
  return (
    <div className='container'>
      {poke && poke.map((item) => <CardPoke item={item} key={item.id} />)}
    </div>
  )
}

export default Details

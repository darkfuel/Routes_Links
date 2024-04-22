import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { Mycontext } from '../context/my_context'

const Pokemones = () => {
  const { poke } = useContext(Mycontext)
  return (
    <Form.Select className='container' aria-label='Default select example'>
      <option>Selecciona un Pokemon</option>
      {poke && poke.map((item) => {
        <option key={item.id} value={item.name}>{item.name}</option>
      })}
    </Form.Select>
  )
}

export default Pokemones

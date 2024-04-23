import { useContext, useState } from 'react'
import { Mycontext } from '../context/my_context'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Pokemones = () => {
  const { poke } = useContext(Mycontext)
  const [select, setSelect] = useState('')
  const navigate = useNavigate()

  const getDetails = () => {
    navigate(`/pokemones/${select}`)
  }

  return (
    <div className='container mt-4'>
      <Form.Select
        aria-label='Default select example'
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option>Selecciona un Pokemon</option>
        {poke &&
          poke.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
      </Form.Select>
      <Button disabled={select === ''} onClick={getDetails} className='container mt-3' variant='warning' size='lg'>
        Ver detalle
      </Button>
    </div>
  )
}

export default Pokemones

import Card from 'react-bootstrap/Card'
import translation from '../functions/translation'
import { useNavigate } from 'react-router-dom'

const CardPoke = ({ personaje, image }) => {
  // redireccionar
  const navigate = useNavigate()
  const getDetails = () => {
    navigate('/pokemones/')
  }
  const propertys = Object.entries(personaje)
  return (
    <Card
      className='container mt-5 p-2'
      border='warning'
      style={{ width: '30rem' }}
    >
      <Card.Title className='text-center text-uppercase'>
        {personaje.name}
      </Card.Title>
      <Card.Img
        className='img-respondive'
        variant='top'
        src={image.front_default}
      />
      <Card.Body>
        {propertys.map((item) => (
          <ul className='bg-warning'>
            <li className='text-capitalize'>
              <strong>{translation[item[0]]}</strong>: {item[1]}
            </li>
          </ul>
        ))}
      </Card.Body>
      <button className='btn btn-warning' onClick={getDetails}>
        Regresar
      </button>
    </Card>
  )
}

export default CardPoke

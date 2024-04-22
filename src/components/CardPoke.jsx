import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useContext } from 'react'
import { Mycontext } from '../context/my_context'

const CardPoke = ({ item }) => {
  const { poke } = useContext(Mycontext)
  console.log(poke)
  return (
    <Card className='text-center' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={item.sprites.back_default} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CardPoke

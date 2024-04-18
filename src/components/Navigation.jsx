import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'>icono</Navbar.Brand>
        <Nav className='ms-auto'>
          <Link to='/'>Home</Link>
          <Link to='/pokemones'>Pokemones</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation

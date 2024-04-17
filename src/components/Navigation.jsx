import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Pokemones</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation

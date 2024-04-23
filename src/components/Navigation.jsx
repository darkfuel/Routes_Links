import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const handleMenu = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <NavLink to='/'><FontAwesomeIcon icon={faLocationDot} /></NavLink>
        <Nav className='ms-auto'>
          <NavLink className={handleMenu} to='/'>Home</NavLink>
          <NavLink className={handleMenu} to='/pokemones'>Pokemones</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation

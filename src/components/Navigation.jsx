import { Nav, Navbar, Container } from 'react-bootstrap'
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

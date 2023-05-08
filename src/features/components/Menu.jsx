import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/menu.css';
import { useState } from 'react';


export default function Menu() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };


  return (
<Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleMenuToggle}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className={menuOpen ? 'show' : ''}>
        <Nav className="mr-auto">
          <Nav.Link href="#sobre-mim">Sobre mim</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

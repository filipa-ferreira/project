import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/header.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <section>
        <header>
          <img className='logo' src="/images/logo.png" alt="logo" />
          <h1>&lt;Filipa Ferreira/&gt;</h1>
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
          <Link className='btn' to="/homepage">Início</Link>
          <Link className='btn' to="/about">Sobre mim</Link>
          <Link className='btn' to="#">Portfolio</Link>
          <Link className='btn' to="/contactForm">Contato</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header>
    </section>
  )
}

import React, { useEffect, useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

import './Header.css'

export default function Header(props) {
  const navbarNode = useRef();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const isOutside = !navbarNode.current.contains(e.target);
      const isCollapsed = document.getElementById('navbar-menu').className.includes("show");
      if (isOutside && isCollapsed) {
        document.querySelector('.navbar-toggler').click();
      }
    });
  
    return () => window.removeEventListener('click', () => {});
  }, [])

  return (
    <Navbar ref={navbarNode} collapseOnSelect bg="dark" variant="dark" expand="lg" className="navbar-default" fixed="top">
      <Navbar.Brand>
        <LinkContainer exact to="/">
            <Nav.Link id="logo">IRL</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
      <Navbar.Toggle className="justify-content-end"/>
      <Navbar.Collapse id="navbar-menu" className="justify-content-end">
        <Nav className="navbar-nav-default" align="center">
          <LinkContainer exact to="/">
            <Nav.Link>Anasayfa</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/categories">
            <Nav.Link>Kategoriler</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/surviving">
            <Nav.Link>Ulaşım ve Barınma</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>Hakkımızda</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/team">
            <Nav.Link>Ekibimiz</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/archive">
            <Nav.Link>Arşiv</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sponsors">
            <Nav.Link>Sponsorlar</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>İletişim</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
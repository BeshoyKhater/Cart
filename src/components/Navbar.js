import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

export const NavbarItem = () => {
    const cart=useSelector((state)=>state.cart)
  return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Container >
        <Link className='navbar-brand' to="/">CART</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Product</Link>
            <Link className="nav-link" to="cart">Cart - {cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

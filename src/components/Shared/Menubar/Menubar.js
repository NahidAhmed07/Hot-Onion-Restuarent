import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useCartData from '../../../hooks/useCartData';
import logo from '../../../images/logo2.png';
import cartIcon from '../../../images/shopping-cart (2).png';
import { HashLink } from "react-router-hash-link";
import './Menubar.css'

const Menubar = () => {
  const { cartItems } = useCartData()
  const { user, logOut } = useAuth();
  
  // const foodQuantity = cartItems.reduce((pre, food)=> pre + food.quantity, 0)
  return (
    <div>
      <Navbar
        fixed="top"
        bg="light"
        expand="lg"
        className="container-fluid px-5"
      >
        <Navbar.Brand as={NavLink} to="/home">
          <img className="img-fluid" width="150px" src={logo} alt=""></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
            navbarScroll
          >
            <Nav.Link>
              <h5>{user.displayName}</h5>
            </Nav.Link>
            <Nav.Link
              className="nav-item position-relative"
              as={HashLink}
              to="/home/checkout#checkout"
            >
              <img width="30px" src={cartIcon} alt=""></img>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
              </span>
            </Nav.Link>
            <Nav.Link className="nav-item login" as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link className="nav-item" as={NavLink} to="/register">
              {user.email ? (
                <button onClick={logOut}>Log out</button>
              ) : (
                <button>Sign Up</button>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menubar;
// Import the CSS module
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto`}>
            <NavLink to="/" className={({ isActive }) => isActive? styles.active: styles.navLink } >
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive? styles.active: styles.navLink } >
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive? styles.active: styles.navLink } >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

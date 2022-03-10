import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown style={{ color: '#FFF' }}>
      <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
      <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
      <NavLink to='/admin' className='nav-link'>Admin (for demo)</NavLink>
    </NavDropdown>

  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link' style={{ color: '#FFF' }}>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link' style={{ color: '#FFF' }}>Sign In</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className={ styles.navbar } expand='md'>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav' className={styles.menu}>
      <Nav>
        {user ? authenticatedOptions : unauthenticatedOptions}
        {user && (
          <span className='navbar-text' style={{ color: '#FFF' }}>{user.email}</span>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

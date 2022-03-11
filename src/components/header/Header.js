import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const authenticatedOptions = (
  <Fragment>
    {/* <NavDropdown>
      <NavLink to='/change-password' className='nav-link' style={{ color: '#FFF' }}>Change Password</NavLink>
      <NavLink to='/sign-out' className='nav-link' style={{ color: '#FFF' }}>Sign Out</NavLink>
    </NavDropdown> */}
    <Dropdown>
      <Dropdown.Toggle className={ styles.options } id="dropdown-basic">
        Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
        <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
      </Dropdown.Menu>
    </Dropdown>
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

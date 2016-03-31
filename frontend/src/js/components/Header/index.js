import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) => {
  return (
    <Navbar className='top-menu' fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>
            <img src={props.logoUrl}></img>
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        {props.menuItems.map(item => {
          return (
            <li role='presentation' key={item + '-li'}>
              <Link key={item} to={'/' + item}>{item}</Link>
            </li>
          )
        })}
      </Nav>
    </Navbar>
  )
}

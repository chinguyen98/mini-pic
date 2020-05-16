import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.scss';

Header.propsType = {};

function Header() {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <NavLink
              exact
              to='/pics'
              className='header__link text-center'
              activeClassName='header_link--active'
            >
              Mini Pic
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;
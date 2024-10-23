import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { faHome, faList, faWrench, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import UserOptions from '../specific/user/UserOptions';

const HeaderContainer = styled(Navbar)`
  background-color: #0E76FF;
  border-bottom: 3px solid #FF980E;
  border-radius: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0 1.5rem; /* Espaciado entre cada ítem */

  span {
    margin-left: 0.3rem; /* Separación de 3 puntos */
    color: #FFF;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer className='app-bg-primary row expand-lg fixed-top sticky-top' id='app-navbar'>
      <div className='col-3'>
        <Navbar.Brand className='mr-auto' href='/'>
          <img src={"https://www.zarla.com/images/zarla-aura-pop-1x1-2400x2400-20210614-9374fqjfdqb9wjfddjgq.png?crop=1:1,smart&width=250&dpr=2"} height='31.5' alt='small-company-logo' />
        </Navbar.Brand>
      </div>
      <div className='col-6' id='app-nav'>
        <Nav className='d-flex align-items-center flex-grow-1 justify-content-around' navbar>
          <Nav.Item className="d-flex align-items-center">
            <NavLink className='nav-link' to='/'>
              <FontAwesomeIcon icon={faHome} /><span>inicio</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center">
            <NavLink className='nav-link' to='/catalogo'>
              <FontAwesomeIcon icon={faList} /><span>catálogo</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center">
            <NavLink className='nav-link' to='/servicios'>
              <FontAwesomeIcon icon={faWrench} /><span>servicios</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center">
            <NavLink className='nav-link' to='/contactanos'>
              <FontAwesomeIcon icon={faComments} /><span>contáctanos</span>
            </NavLink>
          </Nav.Item>
        </Nav>
      </div>
      <div className='col-3 d-flex align-items-center justify-content-end' id='app-auth'>
        <UserOptions />
      </div>
    </HeaderContainer>
  );
};

export default Header;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { faHome, faList, faWrench, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import UserOptions from '../specific/user/UserOptions';
import SplitVariantExample from '../specific/SplitVariantExample';

const HeaderContainer = styled(Navbar)`
  background-color: #0AA1DD;
  border-bottom: 10px solid #FF6000;
  border-radius: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0 40px; /* Separación de 100 puntos */
  span {
    margin-left: 0.3rem;
    color: #FFF;
  }

  &:hover {
    background-color: #white; /* Fondo blanco al pasar el mouse */
    color: black; /* Color del texto al pasar el mouse */
    text-decoration: none;

    span {
      color: black; /* Color del texto al pasar el mouse */
    }

    svg {
      color: black; /* Color del ícono al pasar el mouse */
    }
  }
`;

const AuthButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer expand="lg" className="fixed-top">
      <BrandContainer>
        <Navbar.Brand href='/'>
          <img src="https://www.zarla.com/images/zarla-aura-pop-1x1-2400x2400-20210614-9374fqjfdqb9wjfddjgq.png?crop=1:1,smart&width=250&dpr=2" height='31.5' alt='small-company-logo' />
        </Navbar.Brand>
        <SplitVariantExample />  {/* Menú desplegable a la izquierda del logo */}
      </BrandContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavWrapper>
          <Nav className="justify-content-center">
            <Nav.Item>
              <NavLink to='/'>
                <FontAwesomeIcon icon={faHome} /><span><strong>Inicio</strong></span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/catalogo'>
                <FontAwesomeIcon icon={faList} /><span><strong>Catálogo</strong></span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/servicios'>
                <FontAwesomeIcon icon={faWrench} /><span><strong>Servicios</strong></span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/contactanos'>
                <FontAwesomeIcon icon={faComments} /><span><strong>Contáctanos</strong></span>
              </NavLink>
            </Nav.Item>
          </Nav>
        </NavWrapper>
        <AuthButtonsContainer>
          <UserOptions />
        </AuthButtonsContainer>
      </Navbar.Collapse>
    </HeaderContainer>
  );
};

export default Header;

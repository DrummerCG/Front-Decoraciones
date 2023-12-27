import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {faHome, faList, faWrench, faComments } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
        <Navbar className="app-bg-primary">
            <Navbar.Brand className='mr-auto' href='/'>
                <img src={"https://www.zarla.com/images/zarla-aura-pop-1x1-2400x2400-20210614-9374fqjfdqb9wjfddjgq.png?crop=1:1,smart&width=250&dpr=2"} height='31.5' alt='small-company-logo' />
            </Navbar.Brand>
            <Nav className="ml-auto" navbar>
                        <Nav.Item className="d-flex align-items-center">
                            <Link className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faHome}/><span >inicio</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="d-flex align-items-center">
                            <Link className='nav-link' to='/catalogo'>
                                <FontAwesomeIcon icon={faList}/><span >catalogo</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="d-flex align-items-center">
                            <Link className='nav-link' to='/servicios'>
                            <FontAwesomeIcon icon={faWrench}/><span >servicios</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="d-flex align-items-center">
                            <Link className='nav-link' to='/contactanos'>
                            <FontAwesomeIcon icon={faComments}/><span >contactanos</span>
                            </Link>
                        </Nav.Item>
                    </Nav>
        </Navbar>
    )

}

Header.propTypes = {};

export default Header;
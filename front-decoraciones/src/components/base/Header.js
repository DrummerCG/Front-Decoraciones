import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar>
            <NavbarBrand className='mr-auto' href='/'>
                <img src={"/public/logo512.png"} height='31.5' alt='small-company-logo' />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/'>
                                <span className='fa fa-home fa-lg'>inicio</span>
                            </Link>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/catalogo'>
                                <span className='fa fa-list fa-lg'>catalogo</span>
                            </Link>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/servicios'>
                                <span className='fa fa-list fa-lg'>servicios</span>
                            </Link>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/contactanos'>
                                <span className='fa fa-address-card fa-lg'>contactanos</span>
                            </Link>
                        </NavItem>
                    </Nav>
        </Navbar>
    )

}

Header.propTypes = {};

export default Header;
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { faHome, faList, faWrench, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserOptions from '../specific/user/UserOptions';


const Header = () => {

    const navigate = useNavigate();

    return (
        <Navbar className='app-bg-primary row expand-lg fixed-top sticky-top' id='app-navbar'>
            <div className='col-3'>
                <Navbar.Brand className='mr-auto' href='/'>
                    <img src={"https://www.zarla.com/images/zarla-aura-pop-1x1-2400x2400-20210614-9374fqjfdqb9wjfddjgq.png?crop=1:1,smart&width=250&dpr=2"} height='31.5' alt='small-company-logo' />
                </Navbar.Brand>
            </div>
            <div className='col-6' id='app-nav'>
                <Nav className='d-flex align-items-center flex-grow-1 justify-content-center' navbar>
                    <Nav.Item className="d-flex align-items-center">
                        <Link className='nav-link' to='/'>
                            <FontAwesomeIcon icon={faHome} /><span >inicio</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex align-items-center">
                        <Link className='nav-link' to='/catalogo'>
                            <FontAwesomeIcon icon={faList} /><span >catalogo</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex align-items-center">
                        <Link className='nav-link' to='/servicios'>
                            <FontAwesomeIcon icon={faWrench} /><span >servicios</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex align-items-center">
                        <Link className='nav-link' to='/contactanos'>
                            <FontAwesomeIcon icon={faComments} /><span >contactanos</span>
                        </Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='col-3' id='app-auth'>
                <UserOptions />
            </div>
        </Navbar>
    )

}

Header.propTypes = {};

export default Header;
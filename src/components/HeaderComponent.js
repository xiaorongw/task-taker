import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const Header = () => {
    return(
        <div>
            <Navbar className="navbar">
                <NavbarBrand href="/" className="navbar-text">To Do List</NavbarBrand>
            </Navbar>
        </div>
    )

}

export default Header;
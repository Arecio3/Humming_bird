import React from 'react';
import { Nav, NavbarContainer, NavLogo, Bird } from './NavbarElements';
import logo from '../../images/hummingbird.png';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Hummingbird<br/> Lawn Services LLC</NavLogo>
                    <Bird src={logo} alt="hummingbird" />
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

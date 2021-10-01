import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <IconContext.Provider
              value={{ color: "#FEFEFE", style: {marginRight: '20px'} }}>
              <div>
                <GiHummingbird/>
              </div>
            </IconContext.Provider>
            Hummingbird
            <br /> Lawn Services LLC
          </NavLogo>
          {/* <Bird src={logo} alt="hummingbird" /> */}
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

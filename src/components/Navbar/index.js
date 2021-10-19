import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { IconContext } from "react-icons";
import { animateScroll as scroll} from 'react-scroll'
import { useTranslation } from 'react-i18next';
import i18n  from "../../i18n";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const { t } = useTranslation();
  
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <IconContext.Provider
              value={{ color: "#FEFEFE", style: { marginRight: "20px" } }}
            >
              <div>
                <GiHummingbird />
              </div>
            </IconContext.Provider>
            Hummingbird
            <br /> {t('LawnServices')}
          </NavLogo>
          {/* <Bird src={logo} alt="hummingbird" /> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t('About')}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="reviews" smooth={true} duration={100} spy={true} exact='true' offset={-80}>{t('Reviews')}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={100} spy={true} exact='true' offset={-80}>{t('Services')}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={100} spy={true} exact='true' offset={-80}>{t('Contact')}</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="contact" smooth={true} duration={100} spy={true} exact='true' offset={-80}>{t('HireMe')}</NavBtnLink>
          </NavBtn>
          <div>
              <button onClick={() => i18n.changeLanguage('es')}>ES</button>
              <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            </div>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

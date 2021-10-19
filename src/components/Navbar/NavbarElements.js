import styled from 'styled-components';
import { Link as LR } from 'react-router-dom';
import { Link as LS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`

export const NavLogo = styled(LR)`
    color: #02FA93;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-weight: 200;
    text-decoration: none;
    line-height: 2.7rem;
    letter-spacing: .5px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 428px) {
        font-size: 25px;
    }

    &:hover {
        color: #fff;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 10px;
        transition: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;

    }

    @media screen and (max-width: 428px) {
        top: 15px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
        color: #01bf71;
        transition: all 0.2s ease-in-out;
    } 
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LS)`
border-radius: 50px;
background-color: #01bf71;
white-space: nowrap;
padding: 10px 15px;
color: #010606;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background-color: #02FA93;
    color: #010606;
}
`
export const LangContainer = styled.div`
justify-content: space-between;
@media screen and (max-width:480px) {
    position: absolute;
    right: 55px;
}
`

export const LangBut = styled.span`
margin: 5px;
cursor: pointer;

@media screen and (max-width: 480px) {
    display: none;
}
`

export const MobileLangBut = styled.span`
display: none;


@media screen and (max-width: 480px) {
    display: contents;
}
`
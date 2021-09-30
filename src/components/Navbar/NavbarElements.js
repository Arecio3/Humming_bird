import styled from 'styled-components';
import { Link as LR } from 'react-router-dom';
// import { Link as LS } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    /* margin-top: -80px; */
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
    color: #FAF1CF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 200;
    text-decoration: none;
    line-height: 2.7rem;
    letter-spacing: .5px;
`

export const Bird = styled.img`
    background-color: #FAF1CF;
    border-radius: 50%;
    padding: 5px;

`
import React from "react";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/discover">How it works</FooterLink>
              <FooterLink to="/reviews">Reviews</FooterLink>
              <FooterLink to="/signin">Terms of Servics</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/discover">How it works</FooterLink>
              <FooterLink to="/reviews">Reviews</FooterLink>
              <FooterLink to="/signin">Terms of Servics</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/discover">How it works</FooterLink>
              <FooterLink to="/reviews">Reviews</FooterLink>
              <FooterLink to="/signin">Terms of Servics</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/discover">How it works</FooterLink>
              <FooterLink to="/reviews">Reviews</FooterLink>
              <FooterLink to="/signin">Terms of Servics</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

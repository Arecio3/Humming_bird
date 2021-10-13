import React from "react";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterQuote } from "./FooterElements";
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
              <FooterLinkTitle>Our Mission</FooterLinkTitle>
              <FooterQuote >Give Premium Landscaping Services Fast, Affordable, Secure</FooterQuote> 
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/discover">Instagram</FooterLink>
              <FooterLink to="/reviews">Facebook</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Privacy Policy</FooterLinkTitle>
              <FooterLink to="/discover">Terms of Use</FooterLink>
              <FooterLink>Sitemap</FooterLink>
              <FooterLink>© 2021 HummingBird Lawn Services LLC</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

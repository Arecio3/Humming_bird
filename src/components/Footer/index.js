import React from "react";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterQuote, WebsiteRights } from "./FooterElements";
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
              <FooterLinkTitle>Privacy Policy</FooterLinkTitle>
              <FooterLink to="/discover">Terms of Use</FooterLink>
              <FooterLink>Sitemap</FooterLink>
              <WebsiteRights>HummingBird © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> 
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

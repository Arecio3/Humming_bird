import React from "react";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterQuote, WebsiteRights } from "./FooterElements";
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('AboutUs')}</FooterLinkTitle>
              <FooterLink to="/discover">{t('HowWorks')}</FooterLink>
              <FooterLink to="/reviews">{t('Reviews')}</FooterLink>
              <FooterLink to="/signin">{t('Terms')}</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{t('OurMission')}</FooterLinkTitle>
              <FooterQuote >{t('Mission')}</FooterQuote> 
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('Privacy')}</FooterLinkTitle>
              <FooterLink to="/discover">{('TermsofUse')}</FooterLink>
              <FooterLink>{t('Sitemap')}</FooterLink>
              <WebsiteRights>HummingBird © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> 
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

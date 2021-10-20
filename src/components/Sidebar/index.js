import React from "react";
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";
import { useTranslation } from 'react-i18next';

const Sidebar = ({ isOpen, toggle }) => {

  const { t } = useTranslation();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>{t('About')}</SidebarLink>
          <SidebarLink to="reviews" onClick={toggle}>{t('Reviews')}</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>{t('Services')}</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>{t('Contact')}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="contact" onClick={toggle}>{t('HireMe')}</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

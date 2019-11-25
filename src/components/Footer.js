import React from 'react';
import styled from 'styled-components';

import useSiteContext from './SiteContext';
import ButtonMenu from './ButtonMenu';
import Contact from './Contact';

import { media } from './theme';

const Footer = () => {
  const { mobile } = useSiteContext();

  return (
    <StyledFooter className="footer">
      {mobile && <ButtonMenu className="mobile-footer-nav" />}
      <Contact />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 10;
  ${media.break`
    position: static;
    background: transparent;
  `}
`;

export default Footer;

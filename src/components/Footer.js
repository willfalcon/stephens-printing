import React from 'react';
import styled from 'styled-components';

import useSiteContext from './SiteContext';
import ButtonMenu from './ButtonMenu';
import Contact from './Contact';

const Footer = () => {
  const { mobile } = useSiteContext();

  return (
    <StyledFooter className="footer">
      {mobile && <ButtonMenu className="mobile-footer-nav" />}
      <Contact />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

export default Footer;

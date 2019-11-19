import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import SiteLogo from './SiteLogo';
import useSiteContext from './SiteContext';
import BGVideo from './BGVideo';
import Nav from './Nav';

const Header = () => {
  const { mobile, viewport } = useSiteContext();
  const headerHeight = 250;
  return (
    <>
      {mobile && (
        <MobileHeader headerHeight={headerHeight} className="mobile-header">
          <BGVideo className="header-background" height={headerHeight} />
          <SiteLogo />
        </MobileHeader>
      )}
      {!mobile && (
        <>
          <BGVideo className="background-video" height={viewport.height} />
          <MobileHeader headerHeight={headerHeight} className="header">
            <SiteLogo />
          </MobileHeader>
          <Nav />
        </>
      )}
    </>
  );
};

const MobileHeader = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: relative;
  height: ${({ headerHeight }) => headerHeight}px;
  overflow: hidden;
  .header-background {
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${rgba('white', 0.75)};
    }
  }
  .site-logo {
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Header;

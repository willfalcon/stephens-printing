import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import SiteLogo from './SiteLogo';
import useSiteContext from './SiteContext';

const Header = () => {
  const { backgroundVideo, mobile, viewport } = useSiteContext();
  const headerHeight = 250;
  return (
    <>
      {mobile && (
        <MobileHeader headerHeight={headerHeight} className="mobile-header">
          <div className="header-background">
            <video height={headerHeight}>
              <source src={backgroundVideo.asset.url} type="video/mp4" />
            </video>
          </div>
          <SiteLogo />
        </MobileHeader>
      )}
    </>
  );
};

const MobileHeader = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: relative;
  height: 250px;
  .header-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    video {
      object-fit: cover;
    }
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

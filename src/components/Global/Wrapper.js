import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';

import theme, { media } from '../theme';
import GlobalStyle from './GlobalStyle';
import Header from '../Header';
import { SiteContextProvider } from '../SiteContext';
import InfoBox from './InfoBox';
import Footer from '../Footer';

import { getViewport } from '../utils';

const Wrapper = ({ children, home = false }) => {
  const { height } = getViewport();
  return (
    <ThemeProvider theme={theme}>
      <SiteContextProvider home={home}>
        <PageWrapper viewHeight={height}>
          <div className="page-container">
            <Header />
            <InfoBox />
            {children}
            <Footer />
          </div>
          <GlobalStyle />
        </PageWrapper>
      </SiteContextProvider>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div`
  ${media.break`
    max-height: 100vh;
    height: ${({ viewHeight }) => viewHeight}px;
    position: relative;
    overflow: scroll;
    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background: ${rgba('white', 0.75)};
    }
  `}
`;

export default Wrapper;

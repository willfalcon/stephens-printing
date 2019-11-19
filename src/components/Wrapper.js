import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';

import theme, { media } from './theme';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import { SiteContextProvider } from './SiteContext';
import InfoBox from './InfoBox';
import Footer from './Footer';

import { getViewport } from './utils';

const Wrapper = ({ children, home = false }) => {
  const { height } = getViewport();
  return (
    <ThemeProvider theme={theme}>
      <SiteContextProvider home={home}>
        <PageWrapper viewHeight={height}>
          <Header />
          <InfoBox />
          {children}
          <Footer />
          <GlobalStyle />
        </PageWrapper>
      </SiteContextProvider>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div`
  ${media.break`
    max-height: ${({ viewHeight }) => viewHeight}px;
    height: ${({ viewHeight }) => viewHeight}px;
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
  ${({ theme }) =>
    theme.grid &&
    media.break`
    overflow: hidden;
    display: grid;
    grid-template-columns: 4rem 5fr 4fr 4rem;
    grid-template-rows: auto auto auto auto auto 1fr auto;
    grid-template-areas:
      ". logo     mainnav   ."
      ". logo   pagecontent ."
      ". info   pagecontent ."
      ". info   pagecontent ."
      ". footer pagecontent .";
    justify-content: center;
    .header {
      grid-area: logo;
    }
    .main-nav {
      grid-area: mainnav;
    }
    .info-box {
      grid-area: info;
    }
    .page-container {
      grid-area: pagecontent;
    }
    .footer {
      grid-area: footer;
    }
  `}
`;

export default Wrapper;

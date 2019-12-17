import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';

import theme, { media } from './theme';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import { SiteContextProvider } from './SiteContext';
import InfoBox from './InfoBox';
import Footer from './Footer';
import Meta from './Meta';

import { getViewport } from './utils';

const Wrapper = ({ children, home = false, seo, title, url }) => {
  const { height } = getViewport();
  return (
    <ThemeProvider theme={theme}>
      <SiteContextProvider home={home}>
        <PageWrapper viewHeight={height}>
          <Meta {...seo} title={title} url={url} />
          <Header />
          <InfoBox />
          <PageMain className="page-container">{children}</PageMain>
          <Footer />
          <GlobalStyle />
        </PageWrapper>
      </SiteContextProvider>
    </ThemeProvider>
  );
};

const PageMain = styled.main``;

const PageWrapper = styled.div`
  margin-bottom: 10rem;
  ${media.break`
    max-height: ${({ viewHeight }) =>
      viewHeight > 0 ? `${viewHeight}px` : '100vh'};
    height: ${({ viewHeight }) =>
      viewHeight > 0 ? `${viewHeight}px` : '100vh'};
    overflow: scroll;
    margin-bottom: 0;
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
    grid-template-rows: auto auto auto 1fr;
    grid-column-gap: 2rem;
    grid-template-areas:
      ".  logo      mainnav   ."
      ".  logo    pagecontent ."
      ".  info    pagecontent ."
      ". footer   pagecontent .";
    justify-content: center;
    align-items: start;
    padding-bottom: 3rem;
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
      max-height: 100%;
      overflow: scroll;
    }
    .footer {
      grid-area: footer;
    }
  `}
`;

export default Wrapper;

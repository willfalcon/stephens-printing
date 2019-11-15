import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from './GlobalStyle';
import Header from '../Header';
import { SiteContextProvider } from '../SiteContext';
import InfoBox from './InfoBox';
import Footer from '../Footer';

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SiteContextProvider>
        <PageWrapper>
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

const PageWrapper = styled.div``;

export default Wrapper;

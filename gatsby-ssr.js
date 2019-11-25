import React from 'react';
import Wrapper from './src/components/Wrapper';
import { ThemeProvider } from 'styled-components';
import { SiteContextProvider } from './src/components/SiteContext';
import theme from './src/components/theme';

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Wrapper>{element}</Wrapper>;
};

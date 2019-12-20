/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'normalize.css';
import 'flickity/dist/flickity.css';

import React from 'react';
import Wrapper from './src/components/Wrapper';

export const wrapPageElement = ({ element, props }) => {
  console.log(props);
  const errorPage = { title: 'Error' };
  // props provide same data to Wrapper as Page element will get
  // including location, data, etc - you don't need to pass it
  const { title, seoSettings } = props.data
    ? props.data.sanityHomePage ||
      props.data.sanityAboutPage ||
      props.data.sanityQuoteForm ||
      errorPage
    : errorPage;

  return (
    <Wrapper
      home={props.path === '/'}
      seo={seoSettings}
      title={title}
      url={props.location.href}
    >
      {element}
    </Wrapper>
  );
};

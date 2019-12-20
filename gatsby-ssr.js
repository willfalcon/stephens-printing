import React from 'react';
import Wrapper from './src/components/Wrapper';

export const wrapPageElement = ({ element, props }) => {
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
    <Wrapper seo={seoSettings} title={title} url={props.location.href}>
      {element}
    </Wrapper>
  );
};

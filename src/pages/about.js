import React from 'react';
import { graphql } from 'gatsby';

import Wrapper from '../components/Global/Wrapper';
import Page from '../components/Page';

const about = ({ data }) => {
  return (
    <Wrapper>
      <Page {...data.sanityAboutPage} />
    </Wrapper>
  );
};

export const AboutQuery = graphql`
  query aboutQuery {
    sanityAboutPage(_id: { eq: "aboutPage" }) {
      title
      images {
        asset {
          fixed(width: 400) {
            ...GatsbySanityImageFixed
          }
        }
        alt
        _key
      }
      _rawContent
    }
  }
`;

export default about;

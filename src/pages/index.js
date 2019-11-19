import React from 'react';
import { graphql } from 'gatsby';

import Wrapper from '../components/Wrapper';
import Page from '../components/Page';

const index = ({ data }) => {
  return (
    <Wrapper home>
      <Page {...data.sanityHomePage} />
    </Wrapper>
  );
};

export const HomeQuery = graphql`
  query homeQuery {
    sanityHomePage(_id: { eq: "homePage" }) {
      images {
        asset {
          fixed(width: 400) {
            ...GatsbySanityImageFixed
          }
        }
        alt
        _key
      }
    }
  }
`;

export default index;

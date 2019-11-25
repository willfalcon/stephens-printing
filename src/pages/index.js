import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';

const index = ({ data }) => {
  return <Page {...data.sanityHomePage} />;
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

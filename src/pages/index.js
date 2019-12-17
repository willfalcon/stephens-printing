import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';

const index = ({ data }) => <Page {...data.sanityHomePage} home />;

export const HomeQuery = graphql`
  query homeQuery {
    sanityHomePage(_id: { eq: "homePage" }) {
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
      seoSettings {
        metaDescription
        pageTitle
      }
    }
  }
`;

export default index;

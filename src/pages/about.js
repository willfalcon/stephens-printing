import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';

const about = ({ data }) => {
  return <Page {...data.sanityAboutPage} />;
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

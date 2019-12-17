import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';

const quote = ({ data }) => <Page {...data.sanityQuoteForm} />;

export const QuoteQuery = graphql`
  query quoteQuery {
    sanityQuoteForm {
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
      formBuilder {
        ... on SanityRadioButtons {
          _key
          _type
          name
          options
          fieldOptions {
            halfWidth
            required
          }
        }
        ... on SanityTextArea {
          _key
          _type
          name
          fieldOptions {
            halfWidth
            required
          }
        }
        ... on SanityTextField {
          _key
          _type
          name
          fieldOptions {
            halfWidth
            required
          }
        }
      }
      successMessage
    }
  }
`;

export default quote;

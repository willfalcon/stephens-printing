import React from 'react';
import { graphql } from 'gatsby';

import { ContentBlock } from '../components/Page';

const ErrorPage = ({ data }) => (
  <ContentBlock
    content={data.sanitySiteSettings._rawErrorPage}
    title="Page Not Found"
    home
  />
);

export const ErrorQuery = graphql`
  query errorQuery {
    sanitySiteSettings {
      _rawErrorPage
    }
  }
`;

export default ErrorPage;

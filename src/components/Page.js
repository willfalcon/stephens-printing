import React from 'react';
import styled from 'styled-components';

import Gallery from './Gallery';
import Content from './Content';
import { media } from './theme';

const Page = ({ images, title, _rawContent }) => {
  return (
    <PageContainer className="page-container">
      {images.length > 0 && <Gallery images={images} />}
      {(title || _rawContent) && (
        <PageContent>
          {title && <h1>{title}</h1>}
          {_rawContent && <Content>{_rawContent}</Content>}
        </PageContent>
      )}
    </PageContainer>
  );
};

const PageContent = styled.div`
  padding: 0 2.5rem;
  font-weight: 500;
  line-height: 1.35;
  ${media.break`
    background: white;
    padding: .5rem 2.5rem 2.5rem;
    h1 {
      margin-top: 1rem;
    }
  `}
`;
const PageContainer = styled.main``;

export default Page;

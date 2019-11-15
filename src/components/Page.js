import React from 'react';
import styled from 'styled-components';

import Gallery from './Gallery';

const Page = ({ images }) => {
  return (
    <PageContainer>
      <Gallery images={images} />
    </PageContainer>
  );
};

const PageContainer = styled.div``;

export default Page;

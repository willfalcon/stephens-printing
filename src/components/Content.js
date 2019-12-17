import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Content = ({ children }) => {
  return (
    <ContentStyles>
      <BlockContent
        blocks={children}
        projectId="n1mp5vgv"
        dataset="production"
      />
    </ContentStyles>
  );
};

const ContentStyles = styled.div``;

export default Content;

import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import useSiteContext from './SiteContext';
import { media } from './theme';

const BGVideo = ({ height, className }) => {
  const { backgroundVideo } = useSiteContext();

  return (
    <BackgroundVideoContainer className={classNames(className)}>
      <video height={height}>
        <source src={backgroundVideo.asset.url} type="video/mp4" />
      </video>
    </BackgroundVideoContainer>
  );
};

const BackgroundVideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  video {
    object-fit: cover;
  }
  ${media.break`
    z-index: -2;
  `}
`;

export default BGVideo;

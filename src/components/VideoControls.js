import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { useTransition, animated } from 'react-spring';

import useSiteContext from './SiteContext';

const VideoControls = () => {

  const { pauseVideo, playVideo, videoPlaying } = useSiteContext();

  const buttonTransition = useTransition(videoPlaying, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 1,
    }
  });
  
  return (
    <ControlsContainer className="video-controls">
      {buttonTransition.map(({ item, key, props }) => item ? 
        <Pause key={key} className="pause" onClick={pauseVideo} style={props} /> 
        :
        <Play key={key} className="play" onClick={playVideo} style={props} />
      )}
    </ControlsContainer>
  );
};

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 5;
  width: 30px;
  height: 30px;
`;

const Pause = styled(animated.button)`
  width: 30px;
  height: 30px;
  padding: 0;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  cursor: pointer;
  outline: none;
  ::before {
    position: absolute;
    content: '';
    height: 75%;
    width: 4px;
    background: ${({ theme }) => rgba(theme.dark, .75)};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  ::after {
    position: absolute;
    content: '';
    height: 75%;
    width: 4px;
    background: ${({ theme }) => rgba(theme.dark, .75)};
    left: 35%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Play = styled(animated.button)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  background: transparent;
  border-color: transparent;
  border-style: solid;
  border-left-width: 30px;
  border-top-width: 15px;
  border-bottom-width: 15px;
  border-right-width: 0;
  border-left-color: ${({ theme }) => rgba(theme.dark, .75)};
  cursor: pointer;
  outline: none;
`;

export default VideoControls;
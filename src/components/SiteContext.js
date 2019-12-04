import React, { useContext, useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { getViewport, isPlaying } from './utils';
import theme from './theme';

const SiteContext = React.createContext();

const SiteContextProvider = ({ children, home }) => {
  const siteSettings = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        id
        siteLogo {
          asset {
            fixed(width: 200) {
              ...GatsbySanityImageFixed
            }
          }
          alt
        }
        contactInfo {
          email
          phone
        }
        backgroundVideo {
          asset {
            url
          }
        }
      }
      sanityInfoBox {
        services
        servicesListHeading
        headingText
      }
    }
  `);

  const { sanitySiteSettings, sanityInfoBox: infoBox } = siteSettings;

  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [ready, makeReady] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => {
    function updateViewport() {
      makeReady(false);
      setViewport(getViewport());
      makeReady(true);
    }
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const videoRef = useRef(null);

  const pauseVideo = () => {
    videoRef.current.pause();
    setVideoPlaying(false);
  }

  const playVideo = () => {
    videoRef.current.play();
    setVideoPlaying(true);
  }

  return (
    <SiteContext.Provider
      value={{
        viewport,
        ...sanitySiteSettings,
        infoBox,
        mobile: viewport.width < theme.sizes.break,
        home,
        ready: ready,
        videoRef,
        pauseVideo,
        playVideo,
        videoPlaying
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

const useSiteContext = () => useContext(SiteContext);

export { SiteContextProvider, SiteContext };
export default useSiteContext;

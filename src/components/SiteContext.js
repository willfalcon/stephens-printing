import React, { useContext, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { getViewport } from './utils';
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

  const viewWidth = getViewport().width;

  useEffect(() => {
    function updateViewport() {
      makeReady(false);
      setViewport(getViewport());
      makeReady(true);
    }
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, [viewWidth]);

  return (
    <SiteContext.Provider
      value={{
        viewport,
        ...sanitySiteSettings,
        infoBox,
        mobile: viewport.width < theme.sizes.break,
        home,
        ready: ready,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

const useSiteContext = () => {
  return useContext(SiteContext);
};

export { SiteContextProvider, SiteContext };
export default useSiteContext;

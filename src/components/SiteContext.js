import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useViewport } from './utils';
import theme from './theme';

const SiteContext = React.createContext();

const SiteContextProvider = ({ children }) => {
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

  const viewport = useViewport();

  return (
    <SiteContext.Provider
      value={{
        ...viewport,
        ...sanitySiteSettings,
        infoBox,
        mobile: viewport.viewport.width < theme.sizes.break,
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

import React from 'react';
import Image from 'gatsby-image';

import useSiteContext from './SiteContext';
const SiteLogo = () => {
  const { siteLogo } = useSiteContext();

  return (
    <Image
      className="site-logo"
      fixed={siteLogo.asset.fixed}
      alt="Stephens Printing, LLC"
      style={{
        display: 'block',
      }}
    />
  );
};

export default SiteLogo;

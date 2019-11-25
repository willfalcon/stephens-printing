import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import useSiteContext from './SiteContext';
const SiteLogo = () => {
  const { siteLogo } = useSiteContext();

  return (
    <Link to="/">
      <Image
        className="site-logo"
        fixed={siteLogo.asset.fixed}
        alt={siteLogo.alt}
        style={{
          display: 'block',
        }}
      />
    </Link>
  );
};

export default SiteLogo;

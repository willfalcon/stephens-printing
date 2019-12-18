import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import useSiteContext from './SiteContext';

const Meta = ({ pageTitle, metaDescription, title, url }) => {
  const { home } = useSiteContext();

  const siteProps = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        customCSS {
          code
        }
        siteTitle
      }
    }
  `);

  const {
    sanitySiteSettings: { customCSS, siteTitle }
  } = siteProps;

  const titleTag = pageTitle ? pageTitle : title;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      titleTemplate={home ? siteTitle : `%s | ${siteTitle}`}
      title={titleTag}
    >
      <link rel="stylesheet" href="https://use.typekit.net/gyl1qvf.css" />
      <style type="text/css">{customCSS.code}</style>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Meta;

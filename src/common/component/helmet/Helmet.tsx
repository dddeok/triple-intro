import React from 'react';
import { Helmet } from 'react-helmet';
import { commonData } from '@common/data/commonData';

export const ReactHelmet = () => {
  return (
    <Helmet>
      <title>{commonData.title}</title>
      <meta name="description" content={commonData.description} />
      <meta property="og:url" content={commonData.og_url} />
      <meta property="og:title" content={commonData.og_title} />
      <meta property="og:description" content={commonData.og_description} />
      <meta property="og:type" content={commonData.og_type} />
      <meta property="og:image" content={commonData.og_image} />
      <meta property="og:image:width" content={commonData.og_image_width} />
      <meta property="og:image:height" content={commonData.og_image_height} />
      <meta property="og:locale" content={commonData.og_locale} />
      <meta name="twitter:card" content={commonData.twitter_card} />
      <meta name="twitter:creator" content={commonData.twitter_creator} />
      <meta name="twitter:title" content={commonData.twitter_title} />
      <meta name="twitter:description" content={commonData.twitter_description} />
    </Helmet>
  );
};

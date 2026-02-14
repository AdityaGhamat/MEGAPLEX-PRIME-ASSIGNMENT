import React from "react";
import type { SEOProps } from "./types";

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Megaplex Prime offers premium 1 & 2 BHK apartments with world-class amenities and excellent connectivity.",
  image = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
  url = window.location.href,
}) => {
  const siteTitle = `${title} | Megaplex Prime`;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEO;

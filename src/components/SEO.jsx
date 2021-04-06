import React from "react";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";

const SITE_URL = "https://zoa-architekci.web.app";

const SEO = ({ title, description, image }) => {
  const intl = useIntl();
  const { pathname } = useLocation();
  console.log("pathname:", pathname);
  console.log("image:", image);
  return (
    <>
      <Helmet titleTemplate="%s | ZOA ARCHITEKCI">
        <html dir="ltr" lang={intl.locale} />
        <meta charSet="utf-8" />
        <title lang={intl.locale}>{title}</title>
        <link rel="canonical" href={`${SITE_URL}${pathname}`} />
        <meta name="description" content={description} />
      </Helmet>
      {image ? (
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${SITE_URL}${pathname}`} />
          <meta property="og:title" content={title} />
          <meta
            property="og:image"
            content={`${SITE_URL}${image.childImageSharp.fixed.src}`}
          />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="ZOA ARCHITEKCI" />
          <meta property="og:locale" content={intl.locale} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />
        </Helmet>
      ) : null}
    </>
  );
};

export default SEO;

import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";

const SEO = ({ title, description }) => {
  const intl = useIntl();
  return (
    <>
      <Helmet titleTemplate="%s | ZOA ARCHITEKCI">
        <html lang={intl.locale} />
        <meta charSet="utf-8" />
        <title lang={intl.locale}>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
};

export default SEO;

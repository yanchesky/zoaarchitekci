import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { media } from "src/helpers";
import SEO from "src/components/SEO";

const AboutUsContent = styled.div`
  margin: 0;
  grid-column-start: 1;
  grid-column-end: 7;
  text-align: left;
  max-width: 29rem;
  ${media.tablet`
    grid-column-start: 2;
    grid-column-end: 6;
  `};

  ${media.desktop`
    grid-column-start: 3;
  `};
`;

const StyledHeading = styled.h1`
  white-space: nowrap;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  grid-column-start: 1;
  grid-column-end: 2;
  ${media.tablet`
     
      grid-column-end: 1;
  `};
`;

const StyledParagraph = styled.p`
  line-height: 1.75rem;
  &:first-of-type {
    margin-bottom: 3rem;
  }
`;

const AboutUsSection = () => {
  const t = useIntl();
  const description = t.formatMessage({ id: "pages.workshop.paragraph.1" });
  const strippedDescription = description.split(".")[0];
  return (
    <>
      <SEO
        title={t.formatMessage({ id: "pages.workshop.aboutUs" })}
        description={strippedDescription}
      />
      <StyledHeading id="about-us-section">
        {t.formatMessage({ id: "pages.workshop.aboutUs" })}
      </StyledHeading>
      <AboutUsContent>
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.paragraph.1" }),
          }}
        />

        <StyledParagraph>
          <span
            dangerouslySetInnerHTML={{
              __html: t.formatMessage({ id: "pages.workshop.paragraph.2" }),
            }}
          />
        </StyledParagraph>
        <div
          style={{ position: "relative", top: "-4rem" }}
          id="employees-section"
        />
      </AboutUsContent>
    </>
  );
};

export default AboutUsSection;

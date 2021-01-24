import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { media } from "../../helpers";

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
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const StyledParagraph = styled.p`
  line-height: 1.75rem;
  &:first-of-type {
    margin-bottom: 3rem;
  }
`;

const AboutUsSection = () => {
  const t = useIntl();

  return (
    <AboutUsContent>
      <StyledHeading id="about-us-section">
        {t.formatMessage({ id: "pages.workshop.aboutUs" })}
      </StyledHeading>
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
        <div id="employees-section" />
      </StyledParagraph>
    </AboutUsContent>
  );
};

export default AboutUsSection;

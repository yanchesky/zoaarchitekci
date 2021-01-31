import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { media } from "../../helpers";

const StyledHeading = styled.h1`
  white-space: nowrap;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  grid-column-start: 1;
  grid-column-end: 7;
  ${media.tablet`
      grid-column-end: 7;
  `};
`;

const Year = styled.p`
  color: ${(props) => props.theme.colors["gray-400"]};
  font-weight: bold;
  font-size: 1.125rem;
  grid-column-start: 1;
  grid-column-end: 7;
  ${media.mobile`
    grid-column-end: 2;
  `};
`;

const Prize = styled.div`
  margin: 1rem 0;
  grid-column-start: 1;
  ${media.tablet`
    
  `};
  grid-column-end: 7;
  ${media.tablet`
  grid-column-start: 3;
    grid-column-end: 6;
  `};
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;
`;

const Prizes = () => {
  const t = useIntl();
  return (
    <>
      <StyledHeading>
        {t.formatMessage({ id: "pages.workshop.prizes.title" })}
      </StyledHeading>

      <Year>2008</Year>
      <Prize
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2008.1" }),
        }}
      />
      <Year>2009</Year>
      <Prize>
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2009.1" }),
          }}
        />
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2009.2" }),
          }}
        />
      </Prize>
      <Year>2010</Year>
      <Prize>
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2010.1" }),
          }}
        />

        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2010.2" }),
          }}
        />
      </Prize>
      <Year>2011</Year>
      <Prize>
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2011.1" }),
          }}
        />
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2011.2" }),
          }}
        />
      </Prize>
      <Year>2012</Year>

      <Prize
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2012.1" }),
        }}
      />
      <Year>2013</Year>
      <Prize
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2013.1" }),
        }}
      />

      <Year>2016</Year>
      <Prize
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2016.1" }),
        }}
      />
      <Year>2019</Year>
      <Prize>
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2019.1" }),
          }}
        />
        <StyledParagraph
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2019.2" }),
          }}
        />
      </Prize>
      <Year>2020</Year>
      <Prize
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2020.1" }),
        }}
      />
      <StyledHeading>
        <div
          style={{ position: "relative", top: "-4rem" }}
          id="our-clients-section"
        />
      </StyledHeading>
    </>
  );
};

export default Prizes;

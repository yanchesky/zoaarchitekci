import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
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
  margin-bottom: 1rem;
  grid-column-start: 1;
  ${media.tablet`
    
  `};
  grid-column-end: 7;
  ${media.tablet`
  grid-column-start: 3;
    grid-column-end: 6;
  `};
`;

const PrizeLink = styled(Link)`
  margin-bottom: 1rem;
  grid-column-start: 1;
  display: block;

  ${media.tablet`
    
  `};
  grid-column-end: 7;
  ${media.tablet`
  grid-column-start: 3;
    grid-column-end: 6;
  `};

  &:hover {
    text-decoration: underline;
  }
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

      <Year>2023</Year>
      <PrizeLink
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2023.1" }),
        }}
        to={t.formatMessage({ id: "pages.workshop.prizes.2023.1.link" })}
      />

      <Year>2021</Year>
      <PrizeLink
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2021.1" }),
        }}
        to={t.formatMessage({ id: "pages.workshop.prizes.2021.1.link" })}
      />

      <Year>2020</Year>
      <PrizeLink
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2020.1" }),
        }}
        to={t.formatMessage({ id: "pages.workshop.prizes.2020.1.link" })}
      />

      <Year>2019</Year>
      <Prize>
        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2019.1" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2019.1.link" })}
        />
        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2019.2" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2019.2.link" })}
        />
      </Prize>
      <Year>2016</Year>
      <Prize
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2016.1" }),
        }}
      />
      <Year>2013</Year>
      <Prize
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2013.1" }),
        }}
      />

      <Year>2012</Year>
      <PrizeLink
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2012.1" }),
        }}
        to={t.formatMessage({ id: "pages.workshop.prizes.2012.1.link" })}
      />

      <Year>2011</Year>
      <Prize>
        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2011.1" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2011.1.link" })}
        />
        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2011.2" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2011.2.link" })}
        />
      </Prize>
      <Year>2010</Year>
      <Prize>
        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2010.1" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2010.1.link" })}
        />
        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2010.2" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2010.2.link" })}
        />
      </Prize>
      <Year>2009</Year>
      <Prize>
        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2009.1" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2009.1.link" })}
        />

        <PrizeLink
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2009.2" }),
          }}
          to={t.formatMessage({ id: "pages.workshop.prizes.2009.2.link" })}
        />
      </Prize>
      <Year>2008</Year>
      <PrizeLink
        dangerouslySetInnerHTML={{
          __html: t.formatMessage({ id: "pages.workshop.prizes.2008.1" }),
        }}
        to={t.formatMessage({ id: "pages.workshop.prizes.2008.1.link" })}
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

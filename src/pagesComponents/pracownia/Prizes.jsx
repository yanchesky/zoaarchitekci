import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { media } from "../../helpers";

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  grid-column-start: 3;
  grid-column-end: 7;
  margin-top: 4rem;
`;

const MainWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
  ${media.tablet`
    grid-column-start: 2;
    grid-column-end: 6;
  `};

  ${media.desktop`
    grid-column-start: 3;
  `};
`;

const Year = styled.p`
  color: ${(props) => props.theme.colors["gray-400"]};
  font-weight: bold;
  font-size: 1.125rem;
  margin-top: 3rem;
`;

const Prize = styled.p`
  margin: 1rem 0;
`;

const HeadingWrapper = styled.div`
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

const Prizes = () => {
  const t = useIntl();
  return (
    <>
      <HeadingWrapper>
        <StyledHeading>
          {t.formatMessage({ id: "pages.workshop.prizes.title" })}
        </StyledHeading>
      </HeadingWrapper>

      <MainWrapper>
        <Year>2008</Year>
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2008.1" }),
          }}
        />
        <Year>2009</Year>
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2009.1" }),
          }}
        />
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2009.2" }),
          }}
        />
        <Year>2010</Year>
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2010.1" }),
          }}
        />

        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2010.2" }),
          }}
        />
        <Year>2011</Year>
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2011.1" }),
          }}
        />
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2011.2" }),
          }}
        />
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
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2019.1" }),
          }}
        />
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2019.2" }),
          }}
        />
        <Year>2020</Year>
        <Prize
          dangerouslySetInnerHTML={{
            __html: t.formatMessage({ id: "pages.workshop.prizes.2020.1" }),
          }}
        />
      </MainWrapper>
    </>
  );
};

export default Prizes;

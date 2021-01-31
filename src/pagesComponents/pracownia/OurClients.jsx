import React from "react";
import styled from "styled-components";
import { media } from "src/helpers/breakpoints";

import OurClient from "src/components/OurClient";

import atrium from "src/assets/clients/atrium.gif";
import echo_investment from "src/assets/clients/echo_investment.jpg";
import hbr from "src/assets/clients/hbr.jpg";
import klinkier_bud from "src/assets/clients/klinkier_bud.png";
import konstancin from "src/assets/clients/konstancin.jpg";
import layetana_logo from "src/assets/clients/layetana_logo.png";
import logo_WUM from "src/assets/clients/Logo_WUM.jpg";
import makdom from "src/assets/clients/makdom.png";
import sbridge_office from "src/assets/clients/s-bridge_office.jpg";
import victoria_dom from "src/assets/clients/victoria_dom.png";
import white_stone from "src/assets/clients/white_stone.jpg";

import { useIntl } from "gatsby-plugin-intl";

const clients = [
  {
    icon: atrium,
    scale: 1.4,
    alt: "Atrium real estate logo",
  },
  {
    icon: echo_investment,
    scale: 1.2,
    alt: "Echo investment logo",
  },
  {
    icon: hbr,
    scale: 2,
    alt: "HB Reavis logo",
  },
  {
    icon: klinkier_bud,
    scale: 2,
    alt: "Klinkier bud logo",
  },
  {
    icon: konstancin,
    scale: 2,
    alt: "Uzdrowisko konstancin logo",
  },
  {
    icon: layetana_logo,
    scale: 2,
    alt: "Layetana logo",
  },
  {
    icon: logo_WUM,
    scale: 1,
    alt: "Warszawski uniwersytet medyczny logo",
  },
  {
    icon: makdom,
    scale: 1.7,
    alt: "Makdom logo",
  },
  {
    icon: sbridge_office,
    scale: 1.8,
    alt: "s-bridge office logo",
  },
  {
    icon: victoria_dom,
    scale: 1.7,
    alt: "Victoria Dom logo",
  },
  {
    icon: white_stone,
    scale: 1.2,
    alt: "White Stone logo",
  },
  // {
  //   icon: warbud,
  //   scale: 1.9,
  //   alt: "Warbud logo",
  // },
  // {
  //   icon: zdrojowa,
  //   scale: 1.9,
  //   alt: "Zdrojowa hotels logo",
  // },
];

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

const MainWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
  grid-row-gap: 3rem;
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

const OurClients = () => {
  const t = useIntl();
  return (
    <>
      <StyledHeading>
        {t.formatMessage({ id: "pages.workshop.clients" })}
      </StyledHeading>

      <MainWrapper>
        {clients.map((brand, index, arr) => (
          <>
            <OurClient key={index} {...brand}>
              {/*{arr.length === index + 1 && (*/}
              {/*  <div*/}
              {/*    style={{ position: "relative", top: "-4rem" }}*/}
              {/*    id="prizes-section"*/}
              {/*  />*/}
              {/*)}*/}
            </OurClient>
          </>
        ))}
      </MainWrapper>
    </>
  );
};

export default OurClients;

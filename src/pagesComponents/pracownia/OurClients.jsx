import React from "react";
import styled from "styled-components";
import { media } from "src/helpers/breakpoints";

import OurClient from "src/components/OurClient";

import atrium from "src/assets/clients/atrium.png";
import echo_investment from "src/assets/clients/echo_investment.png";
import hbr from "src/assets/clients/hbr.png";
import klinkier_bud from "src/assets/clients/klinkier_bud.png";
import konstancin from "src/assets/clients/konstancin.png";
import layetana_logo from "src/assets/clients/layetana_logo.png";
import logo_WUM from "src/assets/clients/Logo_WUM.jpg";
import makdom from "src/assets/clients/makdom.png";
import sbridge_office from "src/assets/clients/s-bridge_office.png";
import victoria_dom from "src/assets/clients/victoria_dom.png";
import white_stone from "src/assets/clients/white_stone.png";
import msw from "src/assets/clients/Logo_Ministerstwa_Spraw_Zagranicznych.png";
import tanganyika from "src/assets/clients/tanganyika.png";
import globalworth from "src/assets/clients/globalworth.png";
import napollo from "src/assets/clients/Napollo.png";
import polnord from "src/assets/clients/Polnord-CMYK_Logo-Polnord-Poziome.png";
import randevour from "src/assets/clients/rendeavour.png";
import siemens from "src/assets/clients/Siemens.png";
import warbud from "src/assets/clients/Warbud.png";
import zdrojowa from "src/assets/clients/Zdrojowa.png";
import warynski from "src/assets/clients/warynski.png";
import turret from "src/assets/clients/TURRET-PNG.png";
import archicom from "src/assets/clients/ARCHICOM-PNG.png";
import flora from "src/assets/clients/flora.png";

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
  {
    icon: msw,
    scale: 1.7,
    alt: "Ministerstwo Spraw Zagranicznych logo",
  },
  {
    icon: tanganyika,
    scale: 2,
    alt: "Tanganyika logo",
  },
  {
    icon: globalworth,
    scale: 1.7,
    alt: "globalworth logo",
  },
  {
    icon: napollo,
    scale: 1.7,
    alt: "napollo logo",
  },
  {
    icon: polnord,
    scale: 1.5,
    alt: "polnord logo",
  },
  {
    icon: randevour,
    scale: 1.4,
    alt: "randevour logo",
  },
  {
    icon: siemens,
    scale: 1.4,
    alt: "siemens logo",
  },
  {
    icon: warbud,
    scale: 1.4,
    alt: "warbud logo",
  },
  {
    icon: zdrojowa,
    scale: 1.4,
    alt: "warbud logo",
  },
  {
    icon: warynski,
    scale: 2,
    alt: "warynski logo",
  },
  {
    icon: turret,
    scale: 1,
    alt: "turret logo",
  },
  {
    icon: archicom,
    scale: 1.5,
    alt: "archicom logo",
  },
  {
    icon: flora,
    scale: 1.5,
    alt: "flora logo",
  },
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

const OurClients = () => {
  const t = useIntl();
  return (
    <>
      <StyledHeading>
        {t.formatMessage({ id: "pages.workshop.clients" })}
      </StyledHeading>

      <MainWrapper>
        {clients.map((brand, index) => (
          <OurClient key={index} {...brand} />
        ))}
      </MainWrapper>
    </>
  );
};

export default OurClients;

import React from "react";
import styled from "styled-components";
import { media } from "src/helpers/breakpoints";

import OurClient from "src/components/OurClient";

import atrium from "src/assets/clients/atrium.png";
import echo_investment from "src/assets/clients/echo_investment.png";
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
    alt: "Atrium real estate logo",
  },
  {
    icon: echo_investment,
    alt: "Echo investment logo",
  },
  {
    icon: hbr,
    alt: "HB Reavis logo",
  },
  {
    icon: klinkier_bud,
    alt: "Klinkier bud logo",
  },
  {
    icon: konstancin,
    alt: "Uzdrowisko konstancin logo",
  },
  {
    icon: layetana_logo,
    alt: "Layetana logo",
  },
  {
    icon: logo_WUM,
    alt: "Warszawski uniwersytet medyczny logo",
  },
  {
    icon: makdom,
    alt: "Makdom logo",
  },
  {
    icon: sbridge_office,
    alt: "s-bridge office logo",
  },
  {
    icon: victoria_dom,
    alt: "Victoria Dom logo",
  },
  {
    icon: white_stone,
    alt: "White Stone logo",
  },
];

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
      <HeadingWrapper>
        <StyledHeading>
          {t.formatMessage({ id: "pages.workshop.clients" })}
        </StyledHeading>
      </HeadingWrapper>
      <MainWrapper>
        {clients.map(({ icon, alt }, index, arr) => (
          <>
            <OurClient key={index} icon={icon} alt={alt}>
              {arr.length === index + 1 && <div id="prizes-section" />}
            </OurClient>
          </>
        ))}
      </MainWrapper>
    </>
  );
};

export default OurClients;

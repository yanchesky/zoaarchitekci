import React from "react";
import styled from "styled-components";
import ContactLayout from "src/layouts/ContactLayout";

import { media } from "src/helpers";

import facebookIcon from "../assets/svg/facebook-brands.svg";
import instagramIcon from "../assets/svg/instagram-brands.svg";
import linkedinIcon from "../assets/svg/linkedin-in-brands.svg";
import { useIntl } from "gatsby-plugin-intl";

const SocialMediaLink = styled.a`
  display: inline-flex;
  margin: 0.5rem 0;

  &:before {
    content: url(${(props) => props.icon});
    position: relative;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 2px;
    ${(props) => props.baseline && "margin-top: 1px"};
  }
`;

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
  ${media[540]`
      grid-column-start: 1;
      grid-column-end: 3;
   `};
`;

const Paragraph = styled.span`
  display: block;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["gray-800"]};
  margin: 0.25rem 0;
`;

const AddressWrapper = styled.div`
  display: grid;
  max-width: 29rem;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  ${media["540"]`
    grid-template-columns: 1fr 1fr;
  `};
`;

const AddressLinks = styled.a`
  display: block;
  font-size: 1rem;
  text-decoration: underline;
  color: ${(props) => props.theme.colors["gray-500"]};
  margin-bottom: 0.5rem;

  &:first-of-type {
    margin-top: 0.25rem;
  }
`;

const SocialMediaWrapper = styled.div`
  ${media[540]`
    grid-column-start: 2;
    grid-column-end: 3;
  `};

  display: flex;
  flex-direction: column;
`;

const Kontakt = () => {
  const t = useIntl();
  return (
    <ContactLayout>
      <AddressWrapper>
        <StyledHeading>{t.formatMessage({ id: "contact" })}</StyledHeading>
        <div>
          <Paragraph>ZOA ARCHITEKCI sp. z o.o.</Paragraph>
          <Paragraph>ul. Pilicka 27/1</Paragraph>
          <Paragraph>02-613 Warszawa</Paragraph>
          <Paragraph>NIP: 123456789</Paragraph>
        </div>
        <div>
          <AddressLinks href="tel:+48228442211">+48 22 844 22 11</AddressLinks>
          <AddressLinks href="tel:+48222521635">+48 22 252 16 35</AddressLinks>
          <AddressLinks href="tel:+48222538634">+48 22 253 86 34</AddressLinks>
          <AddressLinks href="mailto:biuro@zoaarchitekci.pl">
            biuro@zoaarchitekci.pl
          </AddressLinks>
          <AddressLinks href="mailto:sekretariat@zoaarchitekci.pl">
            sekretariat@zoaarchitekci.pl
          </AddressLinks>
        </div>
        <SocialMediaWrapper>
          <SocialMediaLink size="1.2rem" icon={facebookIcon}>
            <span>facebook</span>
          </SocialMediaLink>
          <SocialMediaLink size="1.1rem" icon={instagramIcon}>
            <span>instagram</span>
          </SocialMediaLink>
          <SocialMediaLink baseline size="1.0rem" icon={linkedinIcon}>
            <span>linkedin</span>
          </SocialMediaLink>
        </SocialMediaWrapper>
      </AddressWrapper>
    </ContactLayout>
  );
};

export default Kontakt;

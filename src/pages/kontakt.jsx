import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

import ContactLayout from "src/layouts/ContactLayout";
import SEO from "src/components/SEO";
import { media } from "src/helpers";

import facebookIcon from "../assets/svg/facebook-brands.svg";
import instagramIcon from "../assets/svg/instagram-brands.svg";
import linkedinIcon from "../assets/svg/linkedin-in-brands.svg";

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

  &:hover {
    text-decoration: underline;
  }
`;

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
  ${media.desktop`
      grid-column-start: 1;
      grid-column-end: 2;
      
   `};
`;

const Paragraph = styled.span`
  display: block;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["gray-800"]};
  margin: 0.25rem 0;
`;

const ContactWrapper = styled.div`
  display: grid;
  max-width: 300px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  ${media.desktop`
    max-width: ${(props) => props.theme.sizes.footerWidth};
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
`;

const AddressLinks = styled.a`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  &:first-of-type {
    margin-top: 0.25rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const AddressContactWrapper = styled.div`
  ${media.desktop`
   grid-column-start: 3;
 `};
`;

const AddressWrapper = styled.div`
  ${media.desktop`
    grid-column-start: 2;
  `};
`;

const SocialMediaWrapper = styled.div`
  ${media.desktop`
    
  `};

  display: flex;
  flex-direction: column;
`;

const Kontakt = () => {
  const t = useIntl();
  const description =
    "ZOA ARCHITEKCI sp. z o.o. | ul. Pilicka 27/1 | 02-613 Warszawa";
  return (
    <ContactLayout>
      <SEO
        title={t.formatMessage({ id: "contact" })}
        description={description}
      />
      <ContactWrapper>
        <StyledHeading>{t.formatMessage({ id: "contact" })}</StyledHeading>
        <AddressWrapper>
          <Paragraph>ZOA ARCHITEKCI sp. z o.o.</Paragraph>
          <Paragraph>ul. Pilicka 27/1</Paragraph>
          <Paragraph>02-613 Warszawa</Paragraph>
          <Paragraph>NIP: 123456789</Paragraph>
        </AddressWrapper>
        <AddressContactWrapper>
          <AddressLinks href="tel:+48228442211">+48 22 844 22 11</AddressLinks>
          <AddressLinks href="tel:+48222521635">+48 22 252 16 35</AddressLinks>
          <AddressLinks href="tel:+48222538634">+48 22 253 86 34</AddressLinks>
          <AddressLinks href="mailto:biuro@zoaarchitekci.pl">
            biuro@zoaarchitekci.pl
          </AddressLinks>
          <AddressLinks href="mailto:sekretariat@zoaarchitekci.pl">
            sekretariat@zoaarchitekci.pl
          </AddressLinks>
        </AddressContactWrapper>
        <SocialMediaWrapper>
          <SocialMediaLink
            href="https://www.facebook.com/ZOA-Architekci-413609808705428"
            size="1.2rem"
            aria-label="Facebook"
            icon={facebookIcon}
          >
            <span>facebook</span>
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.instagram.com/zoa_architekci/"
            size="1.1rem"
            aria-label="Instagram"
            icon={instagramIcon}
          >
            <span>instagram</span>
          </SocialMediaLink>
          <SocialMediaLink
            aria-label="Linkedin"
            baseline
            size="1.0rem"
            icon={linkedinIcon}
            href="https://www.linkedin.com/company/zoa-architekci/about/"
          >
            <span>linkedin</span>
          </SocialMediaLink>
        </SocialMediaWrapper>
      </ContactWrapper>
    </ContactLayout>
  );
};

export default Kontakt;

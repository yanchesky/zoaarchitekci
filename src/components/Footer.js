import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

import { media } from "src/helpers";

import facebookIcon from "src/assets/svg/facebook-brands.svg";
import instagramIcon from "src/assets/svg/instagram-brands.svg";
import linkedinIcon from "src/assets/svg/linkedin-in-brands.svg";

const SocialMediaLink = styled.a`
  display: inline-flex;
  margin: 0.5rem 1rem;
  ${media.tablet`
    margin: 0.375rem 0
  `}

  > span {
    display: none;
    ${media[540]`
      display: block
    `};
  }

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

const FooterWrapper = styled.div`
  display: grid;
  color: ${(props) => props.theme.colors["gray-700"]};
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  margin: 3rem auto 0;
  max-width: ${(props) => props.theme.sizes.footerWidth};
  ${media.mobile`
    grid-template-columns: 1fr 1fr;
  `}
  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

const SocialMediaLinksWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media.mobile`
  `};
  ${media.tablet`
    flex-direction: column;
    max-width: 8rem;
    margin-left: auto;
  `};
`;

const ColumnTitle = styled.span`
  display: inline-block;

  text-align: left;
  color: ${(props) => props.theme.colors["gray-400"]};
  ${media.mobile`
    margin-bottom: 0.25rem;
  `};
  ${media.tablet`
    max-width: 12rem;
  `};
`;

const SocialMediaColumnTitle = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.colors["gray-400"]};
  text-align: left;
  padding-top: 2rem;

  display: none;
  ${media.mobile`
      
      text-align: center;
      margin-bottom: 1rem;
      
  `}
  ${media.tablet`
    padding-top: 0;
    display: block;
    text-align: left;
    max-width: 8rem;
    margin-left: auto;
    margin-bottom: 0.25rem;
    
  `};
`;

const SocialMediaColumn = styled.div`
  padding: 2rem;
  ${media.mobile`
    padding: 0;
    grid-column-start: 1;
    grid-column-end: 3;
  `};

  ${media.tablet`
    padding: 0;
    grid-column-start: 3;
    grid-column-end: 4;
   
  `};
`;

const MiddleColumn = styled.div`
  display: flex;

  justify-content: flex-start;
  ${media.mobile`
    justify-content: flex-end;
  `};

  ${media.tablet`
    margin-left: 4rem;
    justify-content: center;
  `}
`;

const Paragraph = styled.p`
  margin: 0.375rem 0;

  > a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const t = useIntl();
  return (
    <footer
      style={{ zIndex: "100", background: "white", position: "relative" }}
    >
      <FooterWrapper>
        <div>
          <div style={{ width: "12rem" }}>
            <ColumnTitle>
              {t.formatMessage({ id: "footer.information" })}
            </ColumnTitle>
            <Paragraph>ZOA&nbsp;ARCHITEKCI&nbsp;sp.&nbsp;z&nbsp;o.o.</Paragraph>
            <Paragraph>ul. Pilicka 27/1</Paragraph>
            <Paragraph>02-613 Warszawa</Paragraph>
            <Paragraph>NIP: 5213509865</Paragraph>
          </div>
        </div>
        <MiddleColumn>
          <div style={{ width: "12rem" }}>
            <ColumnTitle>
              {t.formatMessage({ id: "footer.contact" })}
            </ColumnTitle>
            <Paragraph>
              <a href="mailto:biuro@zoaarchitekci.pl">biuro@zoaarchitekci.pl</a>
            </Paragraph>
            <Paragraph>
              <a href="mailto:sekretariat@zoaarchitekci.pl">
                sekretariat@zoaarchitekci.pl
              </a>
            </Paragraph>
            <Paragraph>
              <a href="tel:+48228442211">+48 22 844 22 11</a>
            </Paragraph>
            <Paragraph>
              <a href="tel:+48222521635">+48 22 252 16 35</a>
            </Paragraph>
            <Paragraph>
              <a href="tel:+48222538634">+48 22 253 86 34</a>
            </Paragraph>
          </div>
        </MiddleColumn>
        <SocialMediaColumn>
          <SocialMediaColumnTitle>
            {t.formatMessage({ id: "footer.socialMedia" })}
          </SocialMediaColumnTitle>
          <SocialMediaLinksWrapper>
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
          </SocialMediaLinksWrapper>
        </SocialMediaColumn>
      </FooterWrapper>
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", padding: "1rem 0" }}>
          © 2021 ZOA ARCHITEKCI sp. z o.o.{" "}
          {t.formatMessage({ id: "allRightsReserved" })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

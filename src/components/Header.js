import React from "react";
import styled from "styled-components";
import { injectIntl, useIntl } from "gatsby-plugin-intl";

import HamburgerMenu from "./HamburgerMenu";
import NavigationLink from "./NavigationLink";
import ZoaLogo from "src/assets/svg/zoa_logo_glowne.svg";
import Language from "src/components/Language";
import { media } from "src/helpers";
import { FadeInOutLink } from "src/components/NavigationLink";

const NavigationWrapper = styled.div`
  margin: 0 1.5rem;
  ${media.mobile`
    margin: 0 3rem;
  `};
  padding: 1rem 0;
  position: sticky;
  z-index: 10;
  top: 0;
  &.bg-white {
    background: white;
  }
`;

const Navigation = styled.nav`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledList = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: baseline;
  font-family: Facundo, sans-serif;
  position: absolute;
  //left: calc(100vw - 480px);
  right: 0;
  width: 416px;
  top: 38px;
  ${media.tablet`
    display: flex;
  `};
`;

const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;

const HamgurgerWrapper = styled.div`
  position: relative;
  right: 0;
  top: 56px;
  display: inline-block;
  height: 2.5rem;
  width: 3.5rem;
  z-index: 10;
  ${media.tablet`
    display: none;
  `};
`;

const Header = ({ intl, urlOptions }) => {
  const translateToEnglish = urlOptions?.["en"] || urlOptions?.["default"];
  const translateToPolish = urlOptions?.["pl"] || urlOptions?.["default"];
  const translateToFrench = urlOptions?.["fr"] || urlOptions?.["default"];

  return (
    <NavigationWrapper className="bg-white" id="navigation-wrapper">
      <Navigation>
        <FadeInOutLink to={`/${intl.locale}`}>
          <Logo src={ZoaLogo} />
        </FadeInOutLink>
        <div style={{ position: "relative", left: 0, top: "-64px" }}>
          <HamgurgerWrapper>
            <HamburgerMenu
              translateToEnglish={translateToEnglish}
              translateToPolish={translateToPolish}
              translateToFrench={translateToFrench}
            />
          </HamgurgerWrapper>
          <StyledList>
            <NavigationLink to={`/${intl.locale}/pracownia/`}>
              {intl.formatMessage({ id: "aboutUs" })}
            </NavigationLink>
            <NavigationLink to={`/${intl.locale}/projekty/`}>
              {intl.formatMessage({ id: "projects" })}
            </NavigationLink>
            <NavigationLink to={`/${intl.locale}/kontakt/`}>
              {intl.formatMessage({ id: "contact" })}
            </NavigationLink>
            <Language
              translateToEnglish={translateToEnglish}
              translateToPolish={translateToPolish}
              translateToFrench={translateToFrench}
            />
          </StyledList>
        </div>
      </Navigation>
    </NavigationWrapper>
  );
};

export default injectIntl(Header);

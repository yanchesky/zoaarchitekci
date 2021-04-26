import React from "react";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

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
    width: calc(100% - 6rem);
  `};
  padding: 1rem 0;
  position: fixed;
  width: calc(100% - 3rem);
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
  color: black;
  width: 490px;
  top: 36px;
  ${media[740]`
    display: flex;
  `};

  .globe-icon {
    filter: brightness(0);
  }

  &.grayed-header-fonts {
    color: ${(props) => props.theme.colors["gray-100"]};

    .globe-icon {
      filter: brightness(0);
    }
  }
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
  ${media[740]`
    display: none;
  `};
`;

const Header = ({ intl, urlOptions }) => {
  // jeśli jakiś projekt ma wersję językową, to bierzemy sluga i uwzględniamy w tłumaczeniu (każdy slug jest inny w zleżności od języka)
  const translateToEnglish = urlOptions?.["en"] || urlOptions?.["default"];
  const translateToPolish = urlOptions?.["pl"] || urlOptions?.["default"];
  const translateToFrench = urlOptions?.["fr"] || urlOptions?.["default"];

  return (
    <NavigationWrapper className="bg-white" id="navigation-wrapper">
      <Navigation>
        <FadeInOutLink aria="Logo" to={`/${intl.locale}`}>
          <Logo alt="logo" src={ZoaLogo} />
        </FadeInOutLink>
        <div style={{ position: "relative", left: 0, top: "-64px" }}>
          <HamgurgerWrapper>
            <HamburgerMenu
              translateToEnglish={translateToEnglish}
              translateToPolish={translateToPolish}
              translateToFrench={translateToFrench}
            />
          </HamgurgerWrapper>
          <StyledList
            id="desktop-links-wrapper"
            className="grayed-header-fonts"
          >
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

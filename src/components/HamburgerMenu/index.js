import React, { useRef } from "react";

import NavigationLink, { FadeInOutLink } from "src/components/NavigationLink";
import {
  HamburgerCheckbox,
  HamburgerLinksWrapper,
  HamburgerWrapper,
  HamburgerIconWrapper,
  LinksList,
  LanguagesWrapper,
} from "./styledComponents";
import { injectIntl } from "gatsby-plugin-intl";
import { useLocation } from "@reach/router";

const HamburgerMenu = ({
  intl,
  translateToEnglish,
  translateToPolish,
  translateToFrench,
}) => {
  const hamburgerMenuCheckbox = useRef();
  const location = useLocation();

  React.useEffect(() => {
    hamburgerMenuCheckbox.current = document.querySelector(".checkbox-toggle");
  }, []);

  const closeHamburgerMenu = () =>
    (hamburgerMenuCheckbox.current.checked = false);

  const pageToEnglish = location.pathname.replace(intl.locale, "en");
  const pageToPolish = location.pathname.replace(intl.locale, "pl");
  const pageToFrench = location.pathname.replace(intl.locale, "fr");

  const routeToEnglish = translateToEnglish
    ? `/en${translateToEnglish}`
    : pageToEnglish;
  const routeToPolish = translateToPolish
    ? `/pl${translateToPolish}`
    : pageToPolish;
  const routeToFrench = translateToFrench
    ? `/fr${translateToFrench}`
    : pageToFrench;

  return (
    <HamburgerWrapper>
      <HamburgerCheckbox
        aria-label="menu"
        className="checkbox-toggle"
        type="checkbox"
      />
      <HamburgerIconWrapper>
        <div />
      </HamburgerIconWrapper>
      <HamburgerLinksWrapper>
        <div>
          <div>
            <LinksList>
              <NavigationLink
                onClick={closeHamburgerMenu}
                to={`/${intl.locale}/pracownia`}
              >
                {intl.formatMessage({ id: "aboutUs" })}
              </NavigationLink>
              <NavigationLink
                onClick={closeHamburgerMenu}
                to={`/${intl.locale}/projekty`}
              >
                {intl.formatMessage({ id: "projects" })}
              </NavigationLink>
              <NavigationLink
                onClick={closeHamburgerMenu}
                to={`/${intl.locale}/kontakt`}
              >
                {intl.formatMessage({ id: "contact" })}
              </NavigationLink>
              <LanguagesWrapper>
                <FadeInOutLink to={routeToPolish}>PL</FadeInOutLink>
                <FadeInOutLink to={routeToEnglish}>EN</FadeInOutLink>
                <FadeInOutLink to={routeToFrench}>FR</FadeInOutLink>
              </LanguagesWrapper>
            </LinksList>
          </div>
        </div>
      </HamburgerLinksWrapper>
    </HamburgerWrapper>
  );
};

export default injectIntl(HamburgerMenu);

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
import { changeLocale, injectIntl } from "gatsby-plugin-intl";

const HamburgerMenu = ({
  intl,
  translateToEnglish,
  translateToPolish,
  translateToFrench,
}) => {
  const hamburgerMenuCheckbox = useRef();

  React.useEffect(() => {
    hamburgerMenuCheckbox.current = document.querySelector(".checkbox-toggle");
  }, []);

  const closeHamburgerMenu = () =>
    (hamburgerMenuCheckbox.current.checked = false);

  return (
    <HamburgerWrapper>
      <HamburgerCheckbox className="checkbox-toggle" type="checkbox" />
      <HamburgerIconWrapper>
        <div />
      </HamburgerIconWrapper>
      <HamburgerLinksWrapper>
        <div>
          <div>
            <LinksList>
              <NavigationLink onClick={closeHamburgerMenu} to="/pracownia">
                {intl.formatMessage({ id: "aboutUs" })}
              </NavigationLink>
              <NavigationLink onClick={closeHamburgerMenu} to="/projekty">
                {intl.formatMessage({ id: "projects" })}
              </NavigationLink>
              <NavigationLink onClick={closeHamburgerMenu} to="/kontakt">
                {intl.formatMessage({ id: "contact" })}
              </NavigationLink>
              <LanguagesWrapper>
                <FadeInOutLink
                  to="#"
                  onClick={() => {
                    changeLocale("pl", translateToPolish);
                  }}
                >
                  PL
                </FadeInOutLink>
                <FadeInOutLink
                  to="#"
                  onClick={(e) => {
                    changeLocale("en", translateToEnglish);
                  }}
                >
                  EN
                </FadeInOutLink>
                <FadeInOutLink
                  to="#"
                  onClick={() => {
                    changeLocale("fr", translateToFrench);
                  }}
                >
                  FR
                </FadeInOutLink>
              </LanguagesWrapper>
            </LinksList>
          </div>
        </div>
      </HamburgerLinksWrapper>
    </HamburgerWrapper>
  );
};

export default injectIntl(HamburgerMenu);

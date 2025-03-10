import React, { useState, useRef } from "react";
import { FadeInOutLink } from "./NavigationLink";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";
import { useLocation } from "@reach/router";
import GrowSelectList from "./GrowSelectList";

import langaugeIcon from "src/assets/svg/globe_icon.svg";

const Link = styled.span`
  cursor: pointer;

  margin-left: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Language = ({
  translateToEnglish,
  translateToPolish,
  translateToFrench,
}) => {
  const intl = useIntl();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const pageToEnglish = location.pathname === "/"
      ? "/en"
      : location.pathname.replace(intl.locale, "en");

  const pageToPolish = location.pathname === "/"
      ? "/pl"
      : location.pathname.replace(intl.locale, "pl");

  const pageToFrench = location.pathname === "/"
      ? "/fr"
      : location.pathname.replace(intl.locale, "fr");

  const routeToEnglish = translateToEnglish
    ? `/en${translateToEnglish}`
    : pageToEnglish;
  const routeToPolish = translateToPolish
    ? `/pl${translateToPolish}`
    : pageToPolish;
  const routeToFrench = translateToFrench
    ? `/fr${translateToFrench}`
    : pageToFrench;

    console.log('routeToFrench:', routeToFrench);
  console.log('intl.locale:', intl.locale);
  console.log('location.pathname:', location.pathname);
  return (
    <>
      <Link
        ref={anchorRef}
        onClick={() => setOpen(true)}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        <img
          alt="change language"
          className="globe-icon"
          style={{ position: "relative", top: "2px" }}
          width={"16px"}
          src={langaugeIcon}
        />
        &nbsp;{intl.locale.toUpperCase()}
      </Link>
      <GrowSelectList open={open} setOpen={setOpen} ref={anchorRef}>
        <FadeInOutLink to={routeToPolish} onClick={handleClose}>
          <Link
            style={{
              display: "block",
              padding: "0.25rem 1rem",
            }}
          >
            POLSKI
          </Link>
        </FadeInOutLink>
        <FadeInOutLink to={routeToEnglish} onClick={handleClose}>
          <Link
            style={{
              display: "block",
              padding: "0.25rem 1rem",
            }}
          >
            ENGLISH
          </Link>
        </FadeInOutLink>
        <FadeInOutLink to={routeToFrench} onClick={handleClose}>
          <Link
            style={{
              display: "block",
              padding: "0.25rem 1rem",
            }}
          >FRANÇAIS
          </Link>
        </FadeInOutLink>
      </GrowSelectList>
    </>
  );
};

export default Language;

import React, { useState, useRef } from "react";
import { FadeInOutLink } from "./NavigationLink";
import { changeLocale } from "gatsby-plugin-intl";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";
import GrowSelectList from "./GrowSelectList";

import langaugeIcon from "src/assets/svg/globe_icon.svg";

const Link = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.colors["gray-600"]};
  margin-left: 1rem;
  &:hover {
    color: ${(props) => props.theme.colors["gray-800"]};
    text-decoration: underline;
  }
`;

const Language = ({
  translateToEnglish,
  translateToPolish,
  translateToFrench,
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Link
        ref={anchorRef}
        onClick={() => setOpen(true)}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        <img
          style={{ position: "relative", top: "2px" }}
          width={"16px"}
          src={langaugeIcon}
        />
        &nbsp;{intl.locale.toUpperCase()}
      </Link>
      <GrowSelectList open={open} setOpen={setOpen} ref={anchorRef}>
        <FadeInOutLink
          to="#"
          onClick={(e) => {
            changeLocale("pl", translateToPolish);
            handleClose(e);
          }}
        >
          <Link
            style={{
              display: "block",
              padding: "0.25rem 1rem",
            }}
          >
            Polski
          </Link>
        </FadeInOutLink>
        <FadeInOutLink
          to="#"
          onClick={(e) => {
            changeLocale("en", translateToEnglish);
            handleClose(e);
          }}
        >
          <Link
            style={{
              display: "block",
              padding: "0.25rem 1rem",
            }}
          >
            English
          </Link>
        </FadeInOutLink>
        <FadeInOutLink
          to="#"
          onClick={(e) => {
            changeLocale("fr", translateToFrench);
            handleClose(e);
          }}
        >
          <Link
            style={{
              display: "block",
              padding: "0.25rem 1rem",
            }}
          >
            FRANÇOIS
          </Link>
        </FadeInOutLink>
      </GrowSelectList>
    </>
  );
};

export default Language;
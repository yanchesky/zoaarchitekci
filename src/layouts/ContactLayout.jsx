import React from "react";
import styled from "styled-components";
import { media } from "src/helpers";

const MarginContainer = styled.div`
  margin: 1.5rem;
  ${media.mobile`
    margin: 3rem;
  `};
`;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  grid-auto-flow: column;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
  margin-bottom: 8rem;
  ${media.desktop`
    grid-row-gap: 0;
  `};
`;

const ContactContent = styled.div`
  margin: 0;
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: left;
  margin-right: 2rem;
`;

function ContactLayout({ children }) {
  return <MarginContainer>{children}</MarginContainer>;
}

export default ContactLayout;

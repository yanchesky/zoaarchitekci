import React from "react";
import styled from "styled-components";
import { media } from "src/helpers";

const MarginContainer = styled.div`
  margin: 1.5rem;
  ${media.mobile`
    margin: 6rem 3rem;
  `};
`;

function ContactLayout({ children }) {
  return <MarginContainer>{children}</MarginContainer>;
}

export default ContactLayout;

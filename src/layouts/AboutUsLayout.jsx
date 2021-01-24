import React from "react";
import styled from "styled-components";
import { media } from "src/helpers";
import Footer from "../components/Footer";
import SubPages from "src/pagesComponents/pracownia/SubPages";

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  grid-auto-flow: column;
  grid-row-gap: 4rem;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
  margin-bottom: 8rem;

  ${media.mobile`
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;
  `};
  ${media.bigTablet`
    grid-row-gap: 4rem;
  `};
`;

const MarginContainer = styled.div`
  position: relative;
  margin: 1.5rem;
  ${media.mobile`
    margin: 3rem;
  `};
`;

function ContactLayout({ children }) {
  return (
    <MarginContainer>
      <SubPages />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </MarginContainer>
  );
}

export default ContactLayout;

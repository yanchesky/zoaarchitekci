import React from "react";

import Footer from "src/components/Footer";
import styled from "styled-components";
import { media } from "../helpers";

const MarginContainer = styled.div`
  margin: 1.5rem;
  padding-bottom: 5rem;
  ${media.mobile`
    margin: 3rem;
  `};
`;

function Layout({ children, onFilterClick, tags }) {
  return (
    <section style={{ overflowY: "hidden" }}>
      <MarginContainer>
        <main style={{ maxWidth: "1366px", margin: "0 auto" }}>{children}</main>
        <Footer />
      </MarginContainer>
    </section>
  );
}

export default Layout;

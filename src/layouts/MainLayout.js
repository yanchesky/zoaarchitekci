import React from "react";

import Header from "../components/Header";
// This is used in gatsby-config to omit page transitions

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: Facundo, "Open Sans", sans-serif;
        color: inherit;
        text-decoration: none;
    }
    ul, li, body, p, h1 {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    html{
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
    }
`;

function MainLayout({ children, ...rest }) {
  const urlOptions = rest.pageContext.locales;
  return (
    <div>
      <GlobalStyle />
      <Header urlOptions={urlOptions} />
      <main className="">{children}</main>
    </div>
  );
}

export default MainLayout;

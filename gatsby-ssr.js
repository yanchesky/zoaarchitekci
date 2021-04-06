import React from "react";
import "./src/styles/font_faces.css";
import { ThemeProvider } from "styled-components";
import Theme from "src/themes/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
);

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  /**
   * @type {any[]} headComponents
   */
  const headComponents = getHeadComponents();

  headComponents.sort((a, b) => {
    if (a.props && a.props["data-react-helmet"]) {
      return 0;
    }
    return 1;
  });
  replaceHeadComponents(headComponents);
};

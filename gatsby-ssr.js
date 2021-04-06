import React from "react";
import "./src/styles/font_faces.css";
import { ThemeProvider } from "styled-components";
import Theme from "src/themes/theme";
import { Helmet  } from "react-helmet";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
);

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
};

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

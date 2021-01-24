import React from "react";
import "./src/styles/font_faces.css";
import { ThemeProvider } from "styled-components";
import Theme from "src/themes/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
);

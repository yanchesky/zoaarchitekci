import { css } from "styled-components";

const breakpoints = {
  desktop: 960,
  tablet: 680,
  iphone: 375,
  mobile: 475,
  smallest: 470,
  540: 540,
  740: 740,
  bigTablet: 836,
  full: 1250,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

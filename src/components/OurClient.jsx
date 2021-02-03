import React from "react";
import styled from "styled-components";
import { media } from "src/helpers/breakpoints";

const Wrapper = styled.div`
  justify-self: center;
  align-self: center;
  grid-template-columns: subgrid;
  margin-top: 3rem;
`;

const StyledImage = styled.img`
  width: 100px;
  ${media.mobile`
    width: ${(props) => props.scaledWidth};
  `}
`;

const OurClient = ({ children, icon, scale, alt = "" }) => {
  const width = `${scale * 100}px`;
  return (
    <Wrapper>
      <StyledImage scaledWidth={width} src={icon} alt={alt} />
      {children}
    </Wrapper>
  );
};

export default OurClient;

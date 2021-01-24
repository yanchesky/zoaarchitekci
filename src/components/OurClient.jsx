import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-self: center;
  align-self: center;
  grid-template-columns: subgrid;
  margin-top: 3rem;
`;

const OurClient = ({ children, icon, alt = "" }) => {
  return (
    <Wrapper>
      <img width="100px" src={icon} alt={alt} />
      {children}
    </Wrapper>
  );
};

export default OurClient;

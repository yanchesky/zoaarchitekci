import React from "react";
import { Flipper } from "react-flip-toolkit";
import { handleAnimations, media } from "src/helpers";
import styled from "styled-components";

const FlipperWrapper = styled.div`
  position: relative;
  > div {
    position: relative;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    ${media.tablet`
      grid-template-columns: repeat(2, minmax(0, 1fr));
    `}
    ${media.desktop`
      grid-template-columns: repeat(3, minmax(0, 1fr));
    `}
  }
`;

const ProjectsGridWrapper = ({ children, flipperKey }) => {
  return (
    <FlipperWrapper>
      <Flipper
        flipKey={flipperKey}
        spring="noWobble"
        className=""
        handleEnterUpdateDelete={handleAnimations}
      >
        {children}
      </Flipper>
    </FlipperWrapper>
  );
};

export default ProjectsGridWrapper;

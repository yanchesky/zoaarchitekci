import React from "react";
import Img from "gatsby-image";
import styled, { keyframes } from "styled-components";
import { Flipped } from "react-flip-toolkit";

import { onExit, onElementAppear } from "src/helpers";
import { FadeInOutLink } from "src/components/NavigationLink";

const revealGradient = keyframes`  
  from {
    clip-path: polygon(-100% 0%, 0% 0%, 0% 100%, -100% 100%);
  }

  to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)  
  }
`;

const hideGradient = keyframes`
   from {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)  
  }

  to {
    clip-path: polygon(-100% 0%, 0% 0%, 0% 100%, -100% 100%);
  }
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  z-index: 4;
  max-width: 100%;
  min-width: 150px;
  margin: 20px;
  left: 0;
  bottom: 0;
  //transform: translateY(-50%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  animation: ${hideGradient} 0.3s linear forwards;
  animation-delay: 0.4s;
`;

const Description = styled.p`
  position: relative;
  opacity: 0;
  letter-spacing: 0px;
  transition: all 0.2s ease;
  line-height: 1;
  text-transform: uppercase;
  font-size: ${(props) => (props.year ? "16px" : "18px")};
  color: ${(props) => (props.year ? props.theme.colors["gray-300"] : "white")};
  margin: 0.5rem 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 60%;

  > a {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  &:hover {
    > a > div {
      opacity: 1;
      transition: opacity 0.2s cubic-bezier(0.05, 0.8, 0.38, 1);
    }
    ${DescriptionWrapper} {
      //animation: ${revealGradient} 1s ease;
      max-width: 100%;
      animation: ${revealGradient} 1s cubic-bezier(0.29, 0.89, 0.42, 1) forwards;
    }
    ${Description} {
      transition: all 0.3s cubic-bezier(0.29, 0.89, 0.42, 1);
      letter-spacing: 0px;
      opacity: 1;
    }
  }
  &:before {
    content: "";
    height: 0;
    width: 0;
    display: block;
  }
`;

const RolloverBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  pointer-events: none;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.5s ease-out;
`;

const ProjectsGridItem = ({ project, locale }) => {
  return (
    <Flipped
      flipId={project.id}
      onAppear={onElementAppear}
      onExit={onExit}
      stagger="noWobble"
    >
      <ImageWrapper>
        <FadeInOutLink to={`/${locale}${project.slug}`}>
          <Img
            style={{ height: "100%", maxHeight: "321px" }}
            fluid={project.thumbnail?.childImageSharp?.fluid}
            objectFit="cover"
          />
          <RolloverBox />
          <DescriptionWrapper>
            <Description>{project.title}</Description>
            <Description year>{project.year}</Description>
          </DescriptionWrapper>
        </FadeInOutLink>
      </ImageWrapper>
    </Flipped>
  );
};

export default ProjectsGridItem;

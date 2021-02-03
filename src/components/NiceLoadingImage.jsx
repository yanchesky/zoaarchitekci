import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledImage = styled(Img)`
  transition: all 0.4s linear;
  ${(props) => props.fullHeight && "height: 100vh"};
  &.not-loaded-photo {
    opacity: 0.42;
    filter: blur(1rem);
    transition: all 0.4s linear;
  }
`;

const NiceLoadingImage = ({ fluid, style, imgStyle, alt = "", fullHeight }) => {
  const ref = React.useRef(null);
  return (
    <StyledImage
      className="not-loaded-photo"
      ref={ref}
      onLoad={() => {
        const parent = ref.current.imageRef.current.offsetParent.classList;
        parent.remove("not-loaded-photo");
      }}
      fluid={fluid}
      style={style}
      imgStyle={imgStyle}
      objectFit="cover"
      fullHeight={fullHeight}
      alt={alt}
    />
  );
};

export default NiceLoadingImage;

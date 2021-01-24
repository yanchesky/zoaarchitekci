import React from "react";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";
import styled from "styled-components";

const FadingWrapper = styled.div`
  &.image-faded {
    opacity: 0.4;
    transition: opacity 0.6s linear;
  }
  transition: opacity 0.6s linear;
`;

const IntersectingImage = ({ childImageSharp }) => {
  const { ref, inView, entry } = useInView({ threshold: 0.5 });

  if (inView) {
    entry?.target.classList.remove("image-faded");
  } else {
    entry?.target.classList.add("image-faded");
  }

  return (
    <FadingWrapper className="image-faded" ref={ref} id={childImageSharp.id}>
      <Img
        className="mb-24"
        fluid={childImageSharp.fluid}
        style={{
          height: "100%",
          width: "100%",
          maxHeight: "100vh",
          marginBottom: "6rem",
        }}
        imgStyle={{ objectFit: "contain" }}
        objectFit="cover"
      />
    </FadingWrapper>
  );
};

export default IntersectingImage;

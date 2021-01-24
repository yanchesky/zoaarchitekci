import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
`;

const StyledImage = styled(Img)`
  height: 100vh;
`;

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const FullscreenSlider = ({ images }) => {
  return (
    <Wrapper>
      <Slider fade {...settings}>
        {images.map((image, index) => (
          <StyledImage key={index} fluid={image} objectFit="cover" />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default FullscreenSlider;

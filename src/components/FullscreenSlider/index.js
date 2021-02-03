import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import NiceLoadingImage from "src/components/NiceLoadingImage";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;

  .slick-dots {
    bottom: 20px;

    > li button:before {
      font-size: 8px;
    }
  }
`;

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  accessibility: false,
};

const FullscreenSlider = ({ images }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    var goNext;
    if (ref) {
      goNext = setInterval(function () {
        ref?.current?.slickNext();
        console.log("tick");
      }, 4000);
    }
    return () => {
      clearInterval(goNext);
    };
  }, [ref.current]);
  return (
    <Wrapper>
      <Slider ref={ref} fade {...settings}>
        {images.map((image, index) => (
          <NiceLoadingImage
            style={{ height: "100vh" }}
            key={index}
            fluid={image}
            objectFit="cover"
            fullHeight
          />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default FullscreenSlider;

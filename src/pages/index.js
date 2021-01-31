import React, { useEffect } from "react";
import { queryWelcomeSliderImages } from "src/queries";

import FullscreenSlider from "src/components/FullscreenSlider";
import { useLocation } from "@reach/router";

const IndexPage = () => {
  const location = useLocation();
  const graphQuery = queryWelcomeSliderImages();

  const backgroundPhotos = graphQuery.backgrounds.nodes.map(
    (node) => node.childImageSharp.fluid
  );

  useEffect(() => {
    const links = document.getElementsByClassName("heading-links");
    const wrapper = document.getElementById("navigation-wrapper");

    //Array.from(links).forEach((link) => link.classList.add("welcome-slider"));

    wrapper.classList.remove("bg-white");
  }, [location.pathname]);

  return <FullscreenSlider images={backgroundPhotos} />;
};

export default IndexPage;

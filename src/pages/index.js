import React, { useEffect } from "react";
import { queryWelcomeSliderImages } from "src/queries";
import { useLocation } from "@reach/router";

import FullscreenSlider from "src/components/FullscreenSlider";

const IndexPage = () => {
  const location = useLocation();
  const graphQuery = queryWelcomeSliderImages();

  const backgroundPhotos = graphQuery.backgrounds.nodes.map(
    (node) => node.childImageSharp.fluid
  );

  useEffect(() => {
    const wrapper = document.getElementById("navigation-wrapper");
    const links = document.getElementById("desktop-links-wrapper");

    wrapper.classList.remove("bg-white");
    links.classList.remove("grayed-header-fonts");
    return () => {
      links.classList.add("grayed-header-fonts");
    };
  }, [location.pathname]);

  return <FullscreenSlider images={backgroundPhotos} />;
};

export default IndexPage;

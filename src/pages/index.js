import React, { useEffect } from "react";
import { queryWelcomeSliderImages } from "src/queries";
import { useLocation } from "@reach/router";

import FullscreenSlider from "src/components/FullscreenSlider";
import SEO from "src/components/SEO";

const IndexPage = () => {
  const location = useLocation();
  const graphQuery = queryWelcomeSliderImages();

  const backgroundPhotosTwo = graphQuery.backgrounds.nodes.map((node) => ({
    id: node.id,
    relativePath: node.relativePath,
    name: node.name,
    img: node.childImageSharp.fluid,
  }));

  const originalPaths = graphQuery.backgrounds.nodes
    .map((node) => node.name)
    .filter((name) => !name.includes("mobile"));

  const displayedPhotos = originalPaths.map((name) => {
    const widePhoto = backgroundPhotosTwo.find((photo) => photo.name === name)
      ?.img;
    const mobilePhoto =
      backgroundPhotosTwo.find((photo) => photo.name === `${name}.mobile`)
        ?.img || widePhoto;
    return {
      widePhoto,
      mobilePhoto,
    };
  });

  let doc = typeof window !== "undefined" ? window : global;

  const isScreenPortrait = doc.innerHeight > doc.innerWidth;

  const backgroundPhotos = displayedPhotos.map((photo) => {
    return isScreenPortrait ? photo.mobilePhoto : photo.widePhoto;
  });

  useEffect(() => {
    const wrapper = document.getElementById("navigation-wrapper");
    const tlEdges = document.querySelector(".tl-edges");
    const links = document.getElementById("desktop-links-wrapper");

    tlEdges.style.overflowX = "visible";
    wrapper.classList.remove("bg-white");
    links.classList.remove("grayed-header-fonts");
    return () => {
      links.classList.add("grayed-header-fonts");
      tlEdges.style.overflowX = "auto";
    };
  }, [location.pathname]);

  return (
    <>
      <FullscreenSlider images={backgroundPhotos} />
      <SEO
        title={"ZOA ARCHITEKCI"}
        description={
          "ZOA architekci is a Warsaw-based office for modern architecture and urban planning."
        }
      />
    </>
  );
};

export default IndexPage;

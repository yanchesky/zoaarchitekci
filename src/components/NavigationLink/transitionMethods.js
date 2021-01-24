import gsap from "gsap";

export const exit = ({ node }) => {
  const links = document.getElementsByClassName("heading-links");

  Array.from(links).forEach((link) => {
    // console.log("REMOVING CLASS");
    // link.classList.add("main-section");
    // link.classList.remove("welcome-slider");
  });
  gsap.to(node, { opacity: 0, duration: 0.3 });
};

export const entry = ({ node }) => {
  const target = document.getElementById("navigation-wrapper");
  target.classList.add("bg-white");
  gsap.fromTo(node, { opacity: 0 }, { opacity: 1, duration: 1 });
};

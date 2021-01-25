import { spring } from "react-flip-toolkit";
export * from "./breakpoints";
export * from "./queryTransformers";

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

export function throttle(func, timeFrame) {
  let lastTime = 0;
  return function () {
    let now = new Date();
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
}

export function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export const onElementAppear = (el) =>
  spring({
    onUpdate: (val) => {
      el.style.opacity = val;
      el.style.transform = `scale(${val})`;
    },
  });

export const flattenTags = (projects) => () => {
  const tags = projects.map(({ tags }) => tags);
  return Array.from(new Set(tags.flat()));
};

export const onExit = (el, index, removeElement) => {
  //return removeElement(el);
  spring({
    config: { overshootClamping: false },
    values: {
      translateY: [-15, 0],
      opacity: [0, 1],
    },
    onUpdate: ({ opacity, translateY }) => {
      el.style.transform = `scale(${1 - opacity / 2})`;
      console.log("opacity:", opacity);
      el.style.opacity = `${1 - opacity}`;
    },
    onComplete: removeElement,
  });
};

export const handleAnimations = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements,
}) => {
  hideEnteringElements();
  animateExitingElements();
  animateFlippedElements();
  animateEnteringElements();
};

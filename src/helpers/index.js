import { spring } from "react-flip-toolkit";
export * from "./breakpoints";
export * from "./queryTransformers";

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

export const divideArray = (array, arraysNumber) => {
  const wordsPerLine = Math.ceil(array.length / arraysNumber);
  const dividedArray = [];

  for (let line = 0; line < arraysNumber; line++) {
    dividedArray.push([]);
    for (let i = 0; i < wordsPerLine; i++) {
      const value = array[i + line * wordsPerLine];
      if (!value) continue; //avoid adding "undefined" values
      dividedArray[line].push(value);
    }
  }
  return dividedArray;
};

export const onExit = (el, index, removeElement) => {
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

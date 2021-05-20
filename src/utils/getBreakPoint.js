const breakPoints = [
  {
    name: "phone",
    value: 480,
  },
  {
    name: "tablet",
    value: 760,
  },
  {
    name: "small-screen",
    value: 1024,
  },
  {
    name: "big-screen",
    value: 1280,
  },
];
export const getBreakPoint = (width) => {
  let currentBreakPoint = breakPoints[0].name;

  for (let i = 0; i < breakPoints.length; i++) {
    if (width > breakPoints[i].value) {
      currentBreakPoint = breakPoints[i].name;
    }
  }
  return currentBreakPoint;
};

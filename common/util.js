// calc random in [min, max]  min & max is integer
export const random = (min, max) => {
  return parseInt(Math.random() * (max - min + 1) + min, 10);
};

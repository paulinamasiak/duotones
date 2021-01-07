import facepaint from 'facepaint';

const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const mq = facepaint(keys.map((key) => `@media(min-width: ${values[key]}px)`));

const breakpoints = {
  keys,
  values,
  mq,
};

export default breakpoints;

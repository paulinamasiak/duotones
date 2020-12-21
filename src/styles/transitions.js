import { transitions as transitionsFn } from 'polished';

export const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standart: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
};

const create = (props = ['all'], options = {}) => {
  const {
    duration: durationOption = duration.standart,
    easing: easingOption = easing.easeInOut,
    delay = 0,
  } = options;

  return transitionsFn(props, `${durationOption}ms ${easingOption} ${delay}ms`);
};

const transitions = {
  easing,
  duration,
  create,
};

export default transitions;

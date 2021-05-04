import {ESCAPE_KEY} from '../const.js';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const isEscEvent = (evt, action) => {
  if (evt.key === ESCAPE_KEY) {
    evt.preventDefault();
    action();
  }
};

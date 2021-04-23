import {ESC_KEYCODE} from './const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

export const isEscEvent = (evt, action) => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    action();
  }
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const changeMinutesToHoursAndMinutes = (runtime) => {
  let runtimeHour = runtime.get('hours');
  runtimeHour === 0 ? runtimeHour = '' : runtimeHour = `${runtimeHour}h`;
  let runtimeMinute = runtime.get('minutes');
  runtimeMinute === 0 ? runtimeMinute = '' : runtimeMinute = `${runtimeMinute}m`;
  return `${runtimeHour} ${runtimeMinute}`;
};

export const humanizeReleaseDate = (releaseDate) => {
  return dayjs(releaseDate).format('DD MMMM YYYY');
};

export const humanizeCommentDate = (commentDate) => {
  return dayjs(commentDate).format('YYYY/MM/DD HH:mm');
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

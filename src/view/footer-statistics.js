import {getRandomInteger} from '../utils.js';
export const createFooterStatisticsTemplate = () => {
  return `
  <p>${getRandomInteger(10, 100)} movies inside</p>`;
};

import {getRandomInteger} from '../utils/common.js';
import AbstractView from './abstract.js';

const createFooterStatisticsTemplate = () => {
  return `<p>${getRandomInteger(10, 100)} movies inside</p>`;
};

export default class FooterStatistics extends AbstractView{

  getTemplate() {
    return createFooterStatisticsTemplate();
  }
}

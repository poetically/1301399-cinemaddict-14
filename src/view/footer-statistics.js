import {createElement, getRandomInteger} from '../utils.js';

const createFooterStatisticsTemplate = () => {
  return `<p>${getRandomInteger(10, 100)} movies inside</p>`;
};

export default class FooterStatistics {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

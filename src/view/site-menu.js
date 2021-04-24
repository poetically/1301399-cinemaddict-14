import {createElement} from '../utils.js';

const createFilterItemTemplate = (filter) => {
  const {name, count} = filter;
  const nameFormatted = name === 'ALL' ? 'All movies' : name.charAt(0) + name.slice(1).toLowerCase();
  const countSpan = name === 'ALL' ? '' : ` <span class="main-navigation__item-count">${count}</span></a>`;
  const activeClassName = ' main-navigation__item--active';
  const isActive = name === 'ALL' ? activeClassName : '';
  return `<a href="#${name}" class="main-navigation__item${isActive}">${nameFormatted}${countSpan}`;
};

const createSiteMenuTemplate = (filters) => {
  const filtersTemplate = filters.map((filter) => createFilterItemTemplate(filter)).join('');
  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${filtersTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`;
};

export default class SiteMenu {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._filters);
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

import {FilmSort} from '../const.js';
import {createElement} from '../utils.js';

const createSortItemTemplate = (sortCategory) => {
  const activeClassName = ' sort__button--active';
  const isActive = sortCategory === FilmSort.SORT_BY_DEFAULT ? activeClassName : '';
  return `<li><a href="#" class="sort__button${isActive}">${sortCategory}</a></li>`;
};

const createSortTemplate = (FilmSort) => {
  const sortTemplate = Object.values(FilmSort).map((sortCategory) => createSortItemTemplate(sortCategory)).join('');
  return `<ul class="sort">
  ${sortTemplate}
</ul>`;
};

export default class Sort {
  constructor(FilmSort) {
    this._FilmSort = FilmSort;
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate(this._FilmSort);
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

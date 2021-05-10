import {FilmSort} from '../const.js';
import AbstractView from './abstract.js';

const createSortItemTemplate = (name, isActive, dataset) => {
  const activeClassName = ' sort__button--active';
  const active = isActive ? activeClassName : '';
  // const isActive === FilmSort.SORT_BY_DEFAULT ? activeClassName : '';
  return `<li><a href="#" class="sort__button${active}" data-sort-type="${dataset}">${name}</a></li>`;
};

const createSortTemplate = () => {
  // const sortTemplate = Object.values(FilmSort).map((sortType) => createSortItemTemplate(sortType)).join('');
  const sortTemplate = Object.values(FilmSort).map(({name, isActive, dataset}) => createSortItemTemplate(name, isActive, dataset)).join('');

  return `<ul class="sort">
  ${sortTemplate}
</ul>`;
};

export default class Sort extends AbstractView {
  constructor() {
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== 'A') {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
    console.log(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener('click', this._sortTypeChangeHandler);
  }
}

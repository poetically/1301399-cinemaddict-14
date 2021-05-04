import {FilmSort} from '../const.js';
import AbstractView from './abstract.js';

const createSortItemTemplate = (sortCategory) => {
  const activeClassName = ' sort__button--active';
  const isActive = sortCategory === FilmSort.SORT_BY_DEFAULT ? activeClassName : '';
  return `<li><a href="#" class="sort__button${isActive}">${sortCategory}</a></li>`;
};

const createSortTemplate = () => {
  const sortTemplate = Object.values(FilmSort).map((sortCategory) => createSortItemTemplate(sortCategory)).join('');
  return `<ul class="sort">
  ${sortTemplate}
</ul>`;
};

export default class Sort extends AbstractView {
  getTemplate() {
    return createSortTemplate();
  }
}

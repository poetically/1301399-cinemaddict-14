import {createHeaderPorfileTemplate} from './view/header-profile';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createFilmsSectionTemplate} from './view/films.js';
import {createShowMoreTemplate} from './view/show-more.js';
import {createFilmPopupTemplate} from './view/film-details.js';

const FILM_CARD_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderMultiple = (container, template, place, index) => {
  for (let i = 0; i < index; i++) {
    render(container, template, place);
  }
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(siteHeaderElement, createHeaderPorfileTemplate(), 'beforeend');
render(siteMainElement, createSiteMenuTemplate(), 'beforeend');
render(siteMainElement, createFilmsSectionTemplate(), 'beforeend');

const mainFilmContainer = document.querySelector('.films-list > .films-list__container');

renderMultiple(mainFilmContainer, createFilmCardTemplate(), 'beforeend', FILM_CARD_COUNT);

render(siteMainElement, createShowMoreTemplate(), 'beforeend');
render(document.body, createFilmPopupTemplate(), 'beforeend');

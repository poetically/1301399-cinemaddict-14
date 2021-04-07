import {createHeaderProfileTemplate} from './view/header-profile.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createFilmsTemplate} from './view/films.js';
import {createShowMoreTemplate} from './view/show-more.js';
import {createFilmDetailsTemplate} from './view/film-details.js';

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

render(siteHeaderElement, createHeaderProfileTemplate(), 'beforeend');
render(siteMainElement, createSiteMenuTemplate(), 'beforeend');
render(siteMainElement, createFilmsTemplate(), 'beforeend');

const mainFilmContainer = document.querySelector('.films-list > .films-list__container');

renderMultiple(mainFilmContainer, createFilmCardTemplate(), 'beforeend', FILM_CARD_COUNT);

render(siteMainElement, createShowMoreTemplate(), 'beforeend');
render(document.body, createFilmDetailsTemplate(), 'beforeend');

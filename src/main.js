import {createHeaderProfileTemplate} from './view/header-profile.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createFilmsTemplate} from './view/films.js';
import {createShowMoreTemplate} from './view/show-more.js';
import {createFilmDetailsTemplate} from './view/film-details.js';
// import {createFilmDetailsGenreTemplate} from './view/film-details-genre.js';
import {generateFilm} from './mock/film.js';

const FILM_CARD_COUNT = 5;

const films = new Array(FILM_CARD_COUNT).fill().map(generateFilm);
console.log(films);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(siteHeaderElement, createHeaderProfileTemplate(), 'beforeend');
render(siteMainElement, createSiteMenuTemplate(), 'beforeend');
render(siteMainElement, createFilmsTemplate(), 'beforeend');

const mainFilmContainer = document.querySelector('.films-list > .films-list__container');

for (let i = 0; i < FILM_CARD_COUNT; i++) {
  render(mainFilmContainer, createFilmCardTemplate(films[i]), 'beforeend');
}

render(siteMainElement, createShowMoreTemplate(), 'beforeend');
render(document.body, createFilmDetailsTemplate(films[0]), 'beforeend');

// const filmDetailsGenreContainer = document.querySelector('.film-details__cell--genre');
// render(filmDetailsGenreContainer, createFilmDetailsGenreTemplate, 'beforeend');

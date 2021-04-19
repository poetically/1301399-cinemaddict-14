import {createHeaderProfileTemplate} from './view/header-profile.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createFilmsTemplate} from './view/films.js';
import {createShowMoreTemplate} from './view/show-more.js';
import {createFilmDetailsTemplate} from './view/film-details.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics.js';
import {generateFilm} from './mock/film.js';
import {generateFilter} from './mock/filter.js';
import {FILM_CARD_COUNT, FILM_COUNT_PER_STEP} from './const.js';


const films = new Array(FILM_CARD_COUNT).fill().map(generateFilm);

const filters = generateFilter(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(siteHeaderElement, createHeaderProfileTemplate(), 'beforeend');
render(siteMainElement, createSiteMenuTemplate(filters), 'beforeend');
render(siteMainElement, createFilmsTemplate(), 'beforeend');

const mainFilmContainer = document.querySelector('.films-list > .films-list__container');

for (let i = 0; i <  Math.min(FILM_COUNT_PER_STEP, films.length); i++) {
  render(mainFilmContainer, createFilmCardTemplate(films[i]), 'beforeend');
}

if (films.length >  FILM_COUNT_PER_STEP) {
  let renderedFilmsCount = FILM_COUNT_PER_STEP;
  render(siteMainElement, createShowMoreTemplate(), 'beforeend');
  const showMoreButton = document.querySelector('.films-list__show-more');
  showMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const furtherFiveFilms = films.slice(renderedFilmsCount, renderedFilmsCount + FILM_COUNT_PER_STEP);
    furtherFiveFilms.forEach((film) => render(mainFilmContainer, createFilmCardTemplate(film), 'beforeend'));
    renderedFilmsCount += FILM_COUNT_PER_STEP;
    if (renderedFilmsCount >= films.length) {
      showMoreButton.remove();
    }
  });
}

render(document.body, createFilmDetailsTemplate(films[0]), 'beforeend');
const siteFooterElement = document.querySelector('.footer__statistics');
render(siteFooterElement, createFooterStatisticsTemplate(), 'beforeend');

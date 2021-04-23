import HeaderProfileView from './view/header-profile.js';
import SiteMenuView from './view/site-menu.js';
import FilmCardView from './view/film-card.js';
import FilmsView from './view/films.js';
import ShowMoreView from './view/show-more.js';
import FilmDetailsView from './view/film-details.js';
import FooterStatisticsView from './view/footer-statistics.js';
import {generateFilm} from './mock/film.js';
import {generateFilter} from './mock/filter.js';
import {FilmSort} from './const.js';
import {render, isEscEvent, RenderPosition} from './utils.js';

const FILM_CARD_COUNT = 18;
const FILM_COUNT_PER_STEP = 5;
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer__statistics');

const films = new Array(FILM_CARD_COUNT).fill().map(generateFilm);
const filters = generateFilter(films);

render(siteHeaderElement, new HeaderProfileView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteMenuView(filters, FilmSort).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmsView().getElement(), RenderPosition.BEFOREEND);

const mainFilmContainer = document.querySelector('.films-list > .films-list__container');

const renderFilmCard = (film) => {
  const filmCardComponent = new FilmCardView(film).getElement();
  const onClickShowFilmDetails = (evt) => {
    evt.preventDefault();
    document.body.classList.add('hide-overflow');
    renderFilmDetails(film);
  };
  filmCardComponent.addEventListener('click', onClickShowFilmDetails);
  render(mainFilmContainer, filmCardComponent, RenderPosition.BEFOREEND);
};

const renderSomeFilmCards = () => {
  for (let i = 0; i < Math.min(FILM_COUNT_PER_STEP, films.length); i++) {
    renderFilmCard(films[i]);
  }
};
renderSomeFilmCards();

if (films.length >  FILM_COUNT_PER_STEP) {
  let renderedFilmsCount = FILM_COUNT_PER_STEP;
  render(siteMainElement, new ShowMoreView().getElement(), RenderPosition.BEFOREEND);
  const showMoreButton = document.querySelector('.films-list__show-more');
  const onClickShowMoreCards = (evt) => {
    evt.preventDefault();
    const furtherFiveFilms = films.slice(renderedFilmsCount, renderedFilmsCount + FILM_COUNT_PER_STEP);
    furtherFiveFilms.forEach((film) => renderFilmCard(film));
    renderedFilmsCount += FILM_COUNT_PER_STEP;
    if (renderedFilmsCount >= films.length) {
      showMoreButton.remove();
    }
  };
  showMoreButton.addEventListener('click', onClickShowMoreCards);
}

const renderFilmDetails = (film) => {
  const filmDetailsComponent = new FilmDetailsView(film).getElement();
  const closeButton = filmDetailsComponent.querySelector('.film-details__close-btn');

  const closeFilmDetails = () => {
    document.body.removeChild(filmDetailsComponent);
    document.body.classList.remove('hide-overflow');
    document.removeEventListener('keydown', onEscCloseFilmDetails);
  };

  const onEscCloseFilmDetails = function (evt) {
    isEscEvent(evt, closeFilmDetails);
  };

  const onClickCloseFilmDetails = () => {
    closeFilmDetails();
  };

  closeButton.addEventListener('click', onClickCloseFilmDetails);
  document.addEventListener('keydown', onEscCloseFilmDetails);
  render(document.body, filmDetailsComponent, RenderPosition.BEFOREEND);
};

render(siteFooterElement, new FooterStatisticsView().getElement(), RenderPosition.BEFOREEND);

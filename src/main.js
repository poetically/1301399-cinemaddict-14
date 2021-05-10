import HeaderProfileView from './view/header-profile.js';
import SiteMenuView from './view/site-menu.js';
import SortView from './view/sort.js';
import FilmCardView from './view/film-card.js';
import FilmsView from './view/films.js';
import FilmsListView from './view/films-list.js';
import FilmsListContainerView from './view/films-list-container.js';
import NoFilmView from './view/no-film.js';
import ShowMoreView from './view/show-more.js';
import FilmDetailsView from './view/film-details.js';
import FooterStatisticsView from './view/footer-statistics.js';
import FilmsPresenter from './presenter/films.js';
import {generateFilm} from './mock/film.js';
import {generateFilter} from './mock/filter.js';
import {render, RenderPosition, remove} from './utils/render.js';
import {isEscEvent} from './utils/common.js';

const FILM_CARD_COUNT = 18;
const FILM_COUNT_PER_STEP = 5;
const bodyElement = document.body;
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
const siteFooterElement = bodyElement.querySelector('.footer__statistics');

const films = new Array(FILM_CARD_COUNT).fill().map(generateFilm);
const filters = generateFilter(films);

render(siteHeaderElement, new HeaderProfileView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteMenuView(filters).getElement(), RenderPosition.BEFOREEND);

const filmsPresenter = new FilmsPresenter(siteMainElement);

// const renderShowMoreButton = (container, filmContainer) => {
//   let renderedFilmsCount = FILM_COUNT_PER_STEP;
//   const showMoreButtonComponent = new ShowMoreView();
//   render(container, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);
//   const onClickShowMoreCards = () => {
//     const furtherFiveFilms = films.slice(renderedFilmsCount, renderedFilmsCount + FILM_COUNT_PER_STEP);
//     furtherFiveFilms.forEach((film) => renderFilmCard(filmContainer, film));
//     renderedFilmsCount += FILM_COUNT_PER_STEP;
//     if (renderedFilmsCount >= films.length) {
//       remove(showMoreButtonComponent);
//     }
//   };
//   showMoreButtonComponent.setClickHandler(onClickShowMoreCards);
// };

// const renderSomeFilmCards = (container) => {
//   for (let i = 0; i < Math.min(FILM_COUNT_PER_STEP, films.length); i++) {
//     renderFilmCard(container, films[i]);
//   }
// };

// const renderFilmCard = (container, film) => {
//   const filmCardComponent = new FilmCardView(film);
//   const onClickShowFilmDetails = () => {
//     bodyElement.classList.add('hide-overflow');
//     renderFilmDetails(film);
//   };
//   filmCardComponent.setClickHandler(onClickShowFilmDetails);
//   render(container, filmCardComponent.getElement(), RenderPosition.BEFOREEND);
// };

// const renderFilms = () => {
//   const filmsElement = new FilmsView().getElement();
//   const filmsListElement = new FilmsListView().getElement();
//   const filmsListContainerElement = new FilmsListContainerView().getElement();
//   render(siteMainElement, new SortView().getElement(), RenderPosition.BEFOREEND);
//   render(siteMainElement, filmsElement, RenderPosition.BEFOREEND);
//   render(filmsElement, filmsListElement, RenderPosition.BEFOREEND);
//   render(filmsListElement, filmsListContainerElement, RenderPosition.BEFOREEND);
//   renderSomeFilmCards(filmsListContainerElement);
//   if (films.length >  FILM_COUNT_PER_STEP) {
//     renderShowMoreButton(filmsListElement, filmsListContainerElement);
//   }
// };

// const renderFilmDetails = (film) => {
//   const filmDetailsComponent = new FilmDetailsView(film);

//   const closeFilmDetails = () => {
//     bodyElement.removeChild(filmDetailsComponent.getElement());
//     bodyElement.classList.remove('hide-overflow');
//     document.removeEventListener('keydown', onEscCloseFilmDetails);
//   };

//   const onEscCloseFilmDetails = function (evt) {
//     isEscEvent(evt, closeFilmDetails);
//   };

//   const onClickCloseFilmDetails = () => {
//     closeFilmDetails();
//   };

//   filmDetailsComponent.setCloseBtnClickHandler(onClickCloseFilmDetails);
//   document.addEventListener('keydown', onEscCloseFilmDetails);
//   render(bodyElement, filmDetailsComponent.getElement(), RenderPosition.BEFOREEND);
// };

render(siteFooterElement, new FooterStatisticsView().getElement(), RenderPosition.BEFOREEND);
filmsPresenter.init(films);
// if (films.length > 0) {
//   renderFilms();
// } else {
//   render(siteMainElement, new NoFilmView().getElement(), RenderPosition.BEFOREEND);
// }

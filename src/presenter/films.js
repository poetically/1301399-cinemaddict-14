import SortView from '../view/sort.js';
import FilmCardView from '../view/film-card.js';
import FilmsView from '../view/films.js';
import FilmsListView from '../view/films-list.js';
import FilmsListContainerView from '../view/films-list-container.js';
import NoFilmView from '../view/no-film.js';
import ShowMoreView from '../view/show-more.js';
import FilmDetailsPresenter from '../presenter/film-details.js';
import {sortByDate, sortByRating} from '../utils/sort.js';
import {render, RenderPosition, remove} from '../utils/render.js';
import {FilmSort} from '../const.js';

const FILM_COUNT_PER_STEP = 5;

export default class Films {
  constructor(mainContainer) {
    this._mainContainer = mainContainer;

    this._renderedFilmCardsCount = FILM_COUNT_PER_STEP;
    this._currentSortType = FilmSort.SORT_BY_DEFAULT.dataset;
    this._films = null;
    this._filmDetailsPresenter = null;
    this._isFilmDetailsComponent = false;
    this._sortComponent = new SortView();
    this._filmsListComponent = new FilmsListView();
    this._filmsListContainerComponent = new FilmsListContainerView();
    this._filmsComponent = new FilmsView();
    this._noFilmComponent = new NoFilmView();
    this._showMoreComponent = new ShowMoreView();
    this._bodyElement = document.body;
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  init(films) {
    this._films = films.slice();
    this._sourcedFilms = films.slice();

    this._renderSortAndFilmCards();
  }

  _sortFilms(sortType) {
    switch (sortType) {
      case FilmSort.SORT_BY_DATE.dataset:
        this._films.sort(sortByDate);
        break;
      case FilmSort.SORT_BY_RATING.dataset:
        this._films.sort(sortByRating);
        break;
      default:
        this._films = this._sourcedFilms.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {

    if (this._currentSortType === sortType) {
      return;
    }

    this._sortFilms(sortType);
    console.log(this._films);
    this._clearFilmList();
    this._renderFilmList();
  }

  _clearFilmList() {
    remove(this._filmsListContainerComponent);
    this._renderedFilmCardsCount = FILM_COUNT_PER_STEP;
    remove(this._showMoreComponent);
  }

  _renderSort() {
    render(this._mainContainer, this._sortComponent, RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderFilmCard(film) {
    const filmCardComponent = new FilmCardView(film);

    const onClickShowFilmDetails = () => {
      this._bodyElement.classList.add('hide-overflow');
      if (this._filmDetailsPresenter) {
        this._filmDetailsPresenter.destroy();
      }
      this._filmDetailsPresenter = new FilmDetailsPresenter(this._bodyElement);
      this._filmDetailsPresenter.init(film);
    };

    filmCardComponent.setClickCardHandler(onClickShowFilmDetails);
    render(this._filmsListContainerComponent, filmCardComponent, RenderPosition.BEFOREEND);
  }

  _renderSomeFilmCards(from, to) {
    this._films.slice(from, to).forEach((film) => this._renderFilmCard(film));
  }

  _renderFilmList() {
    render(this._filmsListComponent, this._filmsListContainerComponent, RenderPosition.BEFOREEND);
    this._renderSomeFilmCards(0, Math.min(FILM_COUNT_PER_STEP, this._films.length));
    if (this._films.length > FILM_COUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _handleShowMoreButtonClick() {
    this._renderSomeFilmCards(this._renderedFilmCardsCount, this._renderedFilmCardsCount + FILM_COUNT_PER_STEP);
    this._renderedFilmCardsCount += FILM_COUNT_PER_STEP;
    if (this._renderedFilmCardsCount >= this._films.length) {
      remove(this._showMoreComponent);
    }
  }

  _renderShowMoreButton() {
    render(this._mainContainer, this._showMoreComponent, RenderPosition.BEFOREEND);
    this._showMoreComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _renderNoFilm() {
    render(this._filmSectionContainer, this._noFilmComponent, RenderPosition.AFTERBEGIN);
  }

  _renderSortAndFilmCards() {
    if (this._films.length === 0) {
      this._renderNoFilm();
      return;
    }
    this._renderSort();
    render(this._mainContainer, this._filmsListComponent, RenderPosition.BEFOREEND);
    this._renderFilmList();
  }
}

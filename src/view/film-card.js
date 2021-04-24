import {createElement, changeMinutesToHoursAndMinutes} from '../utils.js';

const MAX_DESC_LENGTH = 140;
const DESC_MAX_INDEX = 138;

const createFilmCardTemplate = (film) => {
  const {title, posterPath, description, year, genres, score, isWatched, isInWatchList, isFavorite, runtime, commentIds} = film;
  const activeButtonClassName = 'film-card__controls-item--active';
  const watchedClassName = isWatched ? activeButtonClassName : '';
  const addToWatchListClassName = isInWatchList ? activeButtonClassName : '';
  const favoriteClassName = isFavorite ? activeButtonClassName : '';
  const firstGenre = genres[0];
  const hourMinuteRuntime = changeMinutesToHoursAndMinutes(runtime);
  const commentsCount = commentIds.length;
  const commentTitle = commentIds.length === 1 ? 'Comment' : 'Comments';
  const shortDescription = description.length > MAX_DESC_LENGTH ? description.slice(0, DESC_MAX_INDEX) + '..' : description;

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${score}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${hourMinuteRuntime}</span>
    <span class="film-card__genre">${firstGenre}</span>
  </p>
  <img src="${posterPath}" alt="" class="film-card__poster">
  <p class="film-card__description">${shortDescription}</p>
  <a class="film-card__comments">${commentsCount} ${commentTitle}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${addToWatchListClassName}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedClassName}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export default class FilmCard {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
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

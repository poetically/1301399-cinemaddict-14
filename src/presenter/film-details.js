import FilmDetailsView from '../view/film-details.js';
// import {isEscEvent} from '../utils/common.js';
import {render, RenderPosition, remove} from '../utils/render.js';

export default class FilmDetails {
  constructor(bodyContainer) {
    this._bodyContainer = bodyContainer;
    this._filmDetailsComponent = null;
    this._film = null;
    this._escKeydownHandler = this._escKeydownHandler.bind(this);
    this._handleCloseBtnClick = this._handleCloseBtnClick.bind(this);
  }

  init(film) {
    this._film = film;
    this._filmDetailsComponent = new FilmDetailsView(this._film);
    this._renderFilmDetails();
  }

  _closeFilmDetails() {
    remove(this._filmDetailsComponent);
    this._bodyContainer.classList.remove('hide-overflow');
    document.removeEventListener('keydown', this._handlerCloseEscPress);
  }

  resetFilmDetails() {
    if (this._filmDetailsComponent !== null) {
      this._closeFilmDetails();
    }
  }

  destroy() {
    remove(this._filmDetailsComponent);
  }

  _escKeydownHandler(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this._closeFilmDetails();
    }
  }

  _handleCloseBtnClick() {
    this._closeFilmDetails();
  }

  _renderFilmDetails() {
    this._filmDetailsComponent.setCloseBtnClickHandler(this._handleCloseBtnClick);
    document.addEventListener('keydown', this._escKeydownHandler);
    render(this._bodyContainer, this._filmDetailsComponent, RenderPosition.BEFOREEND);
  }
}

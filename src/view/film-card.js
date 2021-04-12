export const createFilmCardTemplate = (film) => {
  const {title, posterPath, description, year, genre, score} = film;
  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${score}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">54m</span>
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src="${posterPath}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">89 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

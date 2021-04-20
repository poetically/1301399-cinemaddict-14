import {EMOTIONS} from '../const.js';
import {changeMinutesToHoursAndMinutes, humanizeReleaseDate} from '../utils.js';
import {allComments} from '../mock/comment.js';


const createGenreTemplate = (genres) => {
  return `${genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join('')}`;
};

const createCommentItemTemplate = (comment) => {
  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
  </span>
  <div>
    <p class="film-details__comment-text">${comment.message}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${comment.userName}</span>
      <span class="film-details__comment-day">${comment.date}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
  </li>`;
};

const createCommentsTemplate = (commentIds) => {
  const filteredComments = allComments.filter((comment) => commentIds.includes(comment.id));
  return `${filteredComments.map((comment) => createCommentItemTemplate(comment)).join('')}`;
};

const createEmojiItemTemplate = (emotion) => {
  return `<label class="film-details__emoji-label" for="emoji-${emotion}">
    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emotion}" value="${emotion}">
    <img src="./images/emoji/${emotion}.png" width="30" height="30" alt="emoji">
  </label>`;
};

const createEmojisTemplate = () => {
  return `${EMOTIONS.map((emotion) => createEmojiItemTemplate(emotion)).join('')}`;
};

export const createFilmDetailsTemplate = (film) => {
  const {title, originalTitle, posterPath, score, country, description, runtime, actors, director, writers, releaseDate, genres, ageLimit, isWatched, isFavorite, isInWatchList, commentIds} = film;
  const hourMinuteRuntime = changeMinutesToHoursAndMinutes(runtime);
  const genreTitle = genres.length > 1 ? 'Genres' : 'Genre';
  const commentTitle = commentIds.length === 1 ? 'Comment' : 'Comments';
  const dateOfRelease = humanizeReleaseDate(releaseDate);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${posterPath}" alt="">

          <p class="film-details__age">${ageLimit}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${score}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${dateOfRelease}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${hourMinuteRuntime}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genreTitle}</td>
              <td class="film-details__cell film-details__cell--genre">${createGenreTemplate(genres)}</td>

            </tr>
          </table>

          <p class="film-details__film-description">${description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isInWatchList ? 'checked' : ''}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? 'checked' : ''}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavorite ? 'checked' : ''}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">${commentTitle} <span class="film-details__comments-count">${commentIds.length}</span></h3>

        <ul class="film-details__comments-list">
          ${createCommentsTemplate(commentIds)}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            ${createEmojisTemplate()}
          </div>
        </div>
      </section>
    </div>
  </form>
  </section>`;
};

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import {getRandomInteger} from '../utils.js';
import {TEXT} from '../const.js';
import {generateCommentIndexes} from './comment.js';

const MAX_DESC_LENGTH = 5;
const MAX_YEAR = 1957;
const MIN_YEAR = 1938;
const TITLES = ['The unique choice', 'Crack of doom', 'The desire of journey', 'No criminals, no law', 'L\'ombre de Lucky Luke', 'You can never hold back spring'];
const GENRES = ['drama', 'drammedia', 'mocumentary', 'thriller', 'adventure', 'crime and mystery', 'historical'];
const COUNTRIES = ['Holy Roman Empire', 'UK', 'Denmark', 'Spain', 'France', 'Brazil'];
const DIRECTORS = ['Michael Curtiz', 'Howard Hawks', 'Preston Sturges', 'Charles Walters', 'Vincente Minnelli'];
const ACTORS = ['Porter Hall', 'James Stewart', 'Robert Warwick', 'Gene Lockhart', 'Hedy Lamarr', 'Carmen Miranda', 'Joan Crawford'];
const WRITERS = ['Philip Dunne', 'Norman Krasna', 'Richard Maibaum', 'Julius J. Epstein', 'John Logan'];
const AGE_LIMITS = ['6+', '16+', '60+', '0+'];
const POSTERS = ['made-for-each-other.png', 'popeye-meets-sinbad.png', 'sagebrush-trail.jpg', 'santa-claus-conquers-the-martians.jpg', 'the-dance-of-life.jpg', 'the-great-flamarion.jpg', 'the-man-with-the-golden-arm.jpg'];
const phrases = TEXT.match( /[^.!?]+[.!?]+/g ).map((phrase) => phrase.trim());

const generateDescription = () => {
  const descCount = getRandomInteger(1, MAX_DESC_LENGTH);
  let description = '';
  for (let i = 0; i < descCount; i++) {
    const randomPhrase = phrases[getRandomInteger(0, phrases.length - 1)];
    description += randomPhrase;
    if (i > 0) {
      description += (' ' + randomPhrase);
    }
  }
  return description;
};

const generateReleaseDate = () => {
  return `${getRandomInteger(MIN_YEAR, MAX_YEAR)}-${getRandomInteger(1, 12)}-${getRandomInteger(1, 30)}`;
};


const getDirector = () => {
  return DIRECTORS[getRandomInteger(0, DIRECTORS.length - 1)];
};

const getActors = () => {
  const count = getRandomInteger(2, 4);
  const selectedActors = [];
  for (let i = 0; i < count; i++) {
    selectedActors.push(ACTORS[getRandomInteger(0, ACTORS.length - 1)]);
  }
  return selectedActors.join(', ');
};

const getWriters = () => {
  const count = getRandomInteger(2, 3);
  const selectedWriters = [];
  for (let i = 0; i < count; i++) {
    selectedWriters.push(WRITERS[getRandomInteger(0, WRITERS.length - 1)]);
  }
  return selectedWriters.join(', ');
};

const getPosterPath = () => {
  const path = './images/posters/' + POSTERS[getRandomInteger(0, POSTERS.length - 1)];
  return path;
};

const generateRuntime = () => {
  const runtimeInMinutes = getRandomInteger(50, 125);
  return dayjs.duration(runtimeInMinutes, 'minutes');
};

const generateScore = () => {
  return (getRandomInteger(50, 100) / 10).toFixed(1);
};

const getTitle = () => {
  return TITLES[getRandomInteger(0, TITLES.length - 1)];
};

const getAgeLimit = () => {
  return AGE_LIMITS[getRandomInteger(0, AGE_LIMITS.length - 1)];
};

const generateYear = () => {
  return getRandomInteger(MIN_YEAR, MAX_YEAR);
};

const getGenres = () => {
  const genresCount = getRandomInteger(1, 4);
  const selectedGenres = [];
  for (let i = 0; i < genresCount; i++) {
    selectedGenres.push(GENRES[getRandomInteger(0, GENRES.length - 1)]);
  }
  return selectedGenres;
};

const getCountry = () => {
  return COUNTRIES[getRandomInteger(0, COUNTRIES.length - 1)];
};

export const generateFilm = () => {
  return {
    title: getTitle(),
    originalTitle: null,
    posterPath: getPosterPath(),
    score: generateScore(),
    year: generateYear(),
    genres: getGenres(),
    director: getDirector(),
    writers: getWriters(),
    actors: getActors(),
    releaseDate: generateReleaseDate(),
    runtime: generateRuntime(),
    country: getCountry(),
    description: generateDescription(),
    ageLimit: getAgeLimit(),
    isWatched: Boolean(getRandomInteger()),
    isInWatchList: Boolean(getRandomInteger()),
    isFavorite: Boolean(getRandomInteger()),
    commentIndexes: generateCommentIndexes(),
  };
};


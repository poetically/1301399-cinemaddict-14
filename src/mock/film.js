import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
// import toObject from 'dayjs/plugin/toObject';
dayjs.extend(duration);
// dayjs.extend(toObject);


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const MAX_DESC_LENGTH = 5;
const MAX_COMMENТ_LENGTH = 1;
const MAX_YEAR = 1957;
const MIN_YEAR = 1938;
const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const TITLES = ['The unique choice', 'Crack of doom', 'The desire of journey', 'No criminals, no law', 'L\'ombre de Lucky Luke', 'You can never hold back spring'];
const GENRES = ['drama', 'drammedia', 'mocumentary', 'thriller', 'adventure', 'crime and mystery', 'historical'];
const COUNTRIES = ['Holy Roman Empire', 'UK', 'Danmark', 'Spain', 'France', 'Brazil'];
const DIRECTORS = ['Michael Curtiz', 'Howard Hawks', 'Preston Sturges', 'Charles Walters', 'Vincente Minnelli'];
const ACTORS = ['Porter Hall', 'James Stewart', 'Robert Warwick', 'Gene Lockhart', 'Hedy Lamarr', 'Carmen Miranda', 'Joan Crawford'];
const WRITERS = ['Philip Dunne', 'Norman Krasna', 'Richard Maibaum', 'Julius J. Epstein', 'John Logan'];
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
  return dayjs(`${getRandomInteger(MIN_YEAR, MAX_YEAR)}-${getRandomInteger(1, 12)}-${getRandomInteger(1, 30)}`).format('DD MMMM YYYY');
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
}

const getPosterPath = () => {
  const path = './images/posters/' + POSTERS[getRandomInteger(0, POSTERS.length - 1)];
  return path;
};

const generateRuntime = () => {
  const runtime = {
    minutes: getRandomInteger(0, 59),
    hours: getRandomInteger(1, 2),
  };

  return `${runtime.hours}h ${runtime.minutes}m`;
  // const runtimeInMinutes = getRandomInteger(50, 125);
  // return dayjs.duration(runtimeInMinutes, 'minutes').format(HH:mm);
};

const generateScore = () => {
  return (getRandomInteger(50, 100) / 10).toFixed(1);
};

const getTitle = () => {
  return TITLES[getRandomInteger(0, TITLES.length - 1)];
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

// const generateRuntime = () => {
//   const RUNTIMES = ['1h 22m', '1h 40m', '1h 20m', '58m', '2h 10m', '1h 50m'];
//   return RUNTIMES[getRandomInteger(0, RUNTIMES.length - 1)];
// };

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
    comments: null,
  };
};

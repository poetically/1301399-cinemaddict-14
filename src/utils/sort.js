import dayjs from 'dayjs';

export const sortByDate = (filmA, filmB) => {
  return dayjs(filmB.releaseDate).diff(dayjs(filmA.releaseDate));
};

export const sortByRating = (filmA, filmB) => {
  return filmB.rating > filmA.rating ? 1 : filmA.rating >  filmB.rating ? -1 : 0;
};

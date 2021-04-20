const FilmToFilterMap = {
  ALL: (films) => films.length,
  FAVORITES: (films) => films.filter((film) => film.isFavorite).length,
  HISTORY: (films) => films.filter((film) => film.isWatched).length,
  WATCHLIST: (films) => films.filter((film) => film.isInWatchList).length,
};

export const generateFilter = (films) => {
  return Object.entries(FilmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};

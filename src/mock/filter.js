const filmToFilterMap = {
  'Favorites': (films) => films.filter((film) => film.isFavorite).length,
  'History': (films) => films.filter((film) => film.isWatched).length,
  'Watchlist': (films) => films.filter((film) => film.isInWatchList).length,
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};

const createFilterTemplate = (filter) => {
  const {name, count} = filter;
  const nameFormatted = name === 'ALL' ? 'All movies' : name.charAt(0) + name.slice(1).toLowerCase();
  const countSpan = name === 'ALL' ? '' : ` <span class="main-navigation__item-count">${count}</span></a>`;
  return `
  <a href="#${name}" class="main-navigation__item">${nameFormatted}${countSpan}`;
};

const createSortTemplate = (FilmSort) => {
  return `${Object.values(FilmSort).map((filterName) => `<li><a href="#" class="sort__button">${filterName}</a></li>`).join('')}`;
};


export const createSiteMenuTemplate = (filters, FilmSort) => {
  const filtersTemplate = filters.map((filter) => createFilterTemplate(filter)).join('');
  return `<nav class="main-navigation">
    <div class="main-navigation__items">

      ${filtersTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>
  <ul class="sort">
    ${createSortTemplate(FilmSort)}
  </ul>`;
};

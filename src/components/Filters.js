import React, { useState } from 'react';
import { useContext } from 'react';
import { genreFilterContext } from '../contexts/GenreFilterProvider';
import requests from '../utils/requests';

const style = {
  filtersContainer:
    'rounded-md border bg-white border-gray-200 drop-shadow-sm mr-4',
  filtersTitle: 'flex justify-between py-1',
  filtersTitle__text: 'text-sm font-semibold p-2',
  filtersTitle__arrow: 'text-sm font-semibold p-2 flex items-center',
  filtersTitle__arrow__active:
    'text-sm font-semibold p-2 flex items-center rotate-90',
  filtersTitle__arrowIcon: 'h-4 w-4',
  genreContainer: 'p-2',
  genreTitle: 'text-sm font-light',
  genreButtonsContainer: 'flex flex-wrap py-2',
  genre__button:
    'my-1 mx-2 px-2 py-1 border border-slate-500 rounded-2xl text-xs font-normal hover:bg-[#01b4e4] hover:text-white hover:border-[#01b4e4]',
  genre__button__active:
    'my-1 mx-2 px-2 py-1 border border-slate-500 rounded-2xl text-xs font-normal bg-[#01b4e4] text-white border-[#01b4e4]',
};

function Filters() {
  const [filterButton, setFilterButton] = useState(false);
  const [genreFilterStore, removeGenreFilter, addGenreFilter] =
    useContext(genreFilterContext);

  const dropDownClickHandler = () => {
    if (filterButton) {
      setFilterButton(false);
    } else {
      setFilterButton(true);
    }
  };

  const genreClickHandler = (genreCode) => {
    if (genreFilterStore?.includes(genreCode)) {
      removeGenreFilter(genreCode);
    } else {
      addGenreFilter(genreCode);
    }
  };

  return (
    <div className={style.filtersContainer}>
      <div className={style.filtersTitle}>
        <h2 className={style.filtersTitle__text}>Filters</h2>
        <div
          onClick={() => dropDownClickHandler()}
          className={
            filterButton
              ? style.filtersTitle__arrow__active
              : style.filtersTitle__arrow
          }>
          <img
            className={style.filtersTitle__arrowIcon}
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg"
            alt="arrow"
          />
        </div>
      </div>
      {filterButton && (
        <div className={style.genreContainer}>
          <p className={style.genreTitle}>Genres</p>
          <div className={style.genreButtonsContainer}>
            {requests.map(({ title, genreCode }) => (
              <button
                key={genreCode}
                className={
                  !genreFilterStore.includes(genreCode)
                    ? style.genre__button
                    : style.genre__button__active
                }
                onClick={() => genreClickHandler(genreCode)}>
                {title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;

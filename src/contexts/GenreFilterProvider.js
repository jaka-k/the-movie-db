import { createContext, useState } from 'react';

export const genreFilterContext = createContext();

const GenreFilterProvider = (props) => {
  const [genreFilterStore, setGenreFilterStore] = useState([]);

  const removeGenreFilter = (genreCode) => {
    setGenreFilterStore((initialStore) => {
      if (initialStore?.includes(genreCode)) {
        return initialStore.filter((element) => element !== genreCode);
      } else {
        return initialStore;
      }
    });
  };

  const addGenreFilter = (genreCode) => {
    setGenreFilterStore((initialStore) => {
      if (!initialStore?.includes(genreCode)) {
        return [...initialStore, genreCode];
      } else {
        return initialStore;
      }
    });
  };

  return (
    <genreFilterContext.Provider
      value={[genreFilterStore, removeGenreFilter, addGenreFilter]}>
      {props.children}
    </genreFilterContext.Provider>
  );
};

export default GenreFilterProvider;

import { useState, useRef, useCallback, useEffect, useContext } from 'react';
import { progress } from './utils/progressBar';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Results from './components/Results';
import useFetch from './hooks/useFetch';
import { genreFilterContext } from './contexts/GenreFilterProvider';

const style = {
  mainWrapper: 'flex max-w-7xl mx-auto py-4',
  filterSection: 'px-2 w-1/5 mx-auto',
  resultsSection: 'w-4/5 ',
  loadMore: 'mx-auto pl-2 pr-6',
  loadMore__button:
    'bg-[#01b4e4] p-2 mb-10 m-2 rounded-md w-full text-white hover:text-black text-lg font-bold',
  searchButton:
    'z-50 fixed bottom-0 w-full p-2 text-white text-md font-bold bg-[#01b4e4] hover:bg-[#0d253f]',
  errorMessage: 'p-4 font-thin',
};

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [searchQuery, setSearchQuery] = useState([]);
  const [genreFilterStore] = useContext(genreFilterContext);

  const { data, loading, error, hasMore } = useFetch(searchQuery, pageNumber);

  useEffect(() => {
    if (loading) {
      progress.start();
    } else {
      progress.finish();
    }
  }, [loading, error]);

  useEffect(() => {
    if (genreFilterStore.length > 0) {
      setSearchButton(true);
    } else {
      setSearchButton(false);
    }
  }, [genreFilterStore]);

  const searchClickHandler = () => {
    setSearchQuery(genreFilterStore);
    setSearchButton(false);
    setLoadMore(false);
  };

  const observer = useRef();
  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (!loadMore) return;

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((pageNumber) => pageNumber + 1);
          }
        },
        { treshold: 1.0, delay: 600 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, loadMore, hasMore]
  );

  return (
    <div className="App">
      <Navbar />
      <main className={style.mainWrapper}>
        <section className={style.filterSection}>
          <Filters />
        </section>
        <section className={style.resultsSection}>
          {data && <Results data={data} />}
          {((!loading && hasMore) || (loading && loadMore)) && (
            <div ref={lastMovieElementRef} className={style.loadMore}>
              <button
                className={style.loadMore__button}
                onClick={() => setLoadMore(true)}>
                Load More
              </button>
            </div>
          )}
          {error && (
            <p className={style.errorMessage}>Ups something went wrong</p>
          )}
          {!error && data.length <= 0 && !loading && (
            <p className={style.errorMessage}>
              No items were found that match your query.
            </p>
          )}
        </section>
      </main>
      {searchButton && (
        <button
          className={style.searchButton}
          onClick={() => {
            searchClickHandler();
          }}>
          Search
        </button>
      )}
    </div>
  );
}

export default App;

import { useState, useRef, useCallback, useEffect } from 'react';
import { progress } from './utils/progressBar';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Results from './components/Results';
import useFetch from './hooks/useFetch';
import useQuery from './hooks/useQuery';

const style = {
  mainWrapper: 'flex max-w-7xl mx-auto py-4',
  filterSection: 'px-2 w-1/5',
  resultsSection: 'w-4/5',
  loadMore: 'mx-auto pl-2 pr-6',
  loadMore__button: 'bg-[#01b4e4] p-2 m-2 rounded-md w-full text-white hover:text-black text-lg font-bold',
};

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  let query = useQuery();

  const { data, loading, error, hasMore } = useFetch(
    query.get('genre'),
    pageNumber
  );

  useEffect(() => {
    if (loading) {
      progress.start();
    } else {
      progress.finish();
    }
  }, [loading, error]);

  useEffect(() => {
    setLoadMore(false);
  }, [query]);

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
          {error && <p>Ups something went wrong</p>}
        </section>
      </main>
    </div>
  );
}

export default App;

import { useState, useRef, useCallback, useEffect } from 'react';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Results from './components/Results';
import useFetch from './hooks/useFetch';
import useQuery from './hooks/useQuery';


function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  let query = useQuery();

  const { data, loading, error, hasMore } = useFetch(query.get("genre"), pageNumber);
  console.log(pageNumber);

  useEffect(() => {
    setLoadMore(false)
  }, [query])

  const observer = useRef();
  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (!loadMore) return;

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(() => {console.log("The setTimeout")}, 1000)
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, loadMore, hasMore]
  );

  return (
    <div className="App">
      <Navbar />
      <main className="flex max-w-7xl mx-auto py-4">
        <section className="px-4 w-1/4">
          <Filters />
        </section>
        <section className="px-4 w-3/4">
          {loading && <p>Loading...</p>}
          {!loading && <Results data={data} />}
          {!loading && hasMore && (
            <div ref={lastMovieElementRef} className="mx-auto">
              <button
                className="bg-[#01b4e4] p-2 rounded-md w-full"
                onClick={() => setLoadMore(true)}>
                Load more
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

// TODO:
// - infinite scrolling
//    - refresh bug
// - genre selector via params (or via useContext)
// - movie card styling (with voting score)
// - Filters card

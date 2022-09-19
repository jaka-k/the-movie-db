import { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

function useFetch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: { api_key: API_KEY, with_genres: query.join(','), page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setData((prevData) => {
          return [...prevData, ...response.data.results];
        });
        setHasMore(response.data.page < response.data.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { data, loading, error, hasMore };
}

export default useFetch;

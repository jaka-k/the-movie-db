const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchAdventureMovie: {
    title: 'Adventure',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchCrime: {
    title: 'Crime',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  fetchDocumentary: {
    title: 'Documentary',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  fetchDrama: {
    title: 'Drama',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  fetchFamilyMovies: {
    title: 'Family',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchFantasyMovies: {
    title: 'Fantasy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  fetchHistoryMovies: {
    title: 'History',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchMusicMovies: {
    title: 'Music',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchTV: {
    title: 'TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchThriller: {
    title: 'Thriller',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  fetchWarMovies: {
    title: 'War',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
};

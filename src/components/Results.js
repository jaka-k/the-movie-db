import React from 'react';
import MovieCard from './MovieCard';
import dateConvertor from '../utils/dateUtils';

const style = {
  resultsContainer: 'flex flex-wrap justify-evenly',
};

function Results({ data }) {
  return (
    <div className={style.resultsContainer}>
      {data.map((element) => (
        <MovieCard
          key={element.id}
          img={element.poster_path || element.backdrop_path}
          title={element.title || element.original_name}
          date={dateConvertor(element.release_date || element.first_air_date)}
          vote={Math.round(element.vote_average * 10)}
        />
      ))}
    </div>
  );
}

export default Results;

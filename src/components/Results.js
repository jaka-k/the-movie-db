import React from 'react'
import MovieCard from './MovieCard'
import dateConvertor from '../utils/dateUtils';

function Results({data}) {

  return (
    <div className='flex flex-wrap'>
        {data?.results.map((element) => (
            <MovieCard 
            key={element.id}
            img={element.backdrop_path || element.poster_path}
            title={element.title || element.original_name}
            date={dateConvertor(element.release_date || element.first_air_date)}
            vote={Math.round(element.vote_average * 10)}
            />
        ))}
    </div>
  )
}

export default Results
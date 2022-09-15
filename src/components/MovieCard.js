import React from 'react';
import VoteGauge from './VoteGauge';
const BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

const style = {
  movieCardContainer:
    'relative rounded-md m-1 w-1/6 bg-white border border-gray-200 drop-shadow-sm',
  movieImg: 'h-3/4 rounded-t-md w-full object-cover',
  titleContainer: 'h-1/4 pt-8 px-2 pb-1 flex flex-col content-end',
  movieTitle: 'font-bold text-xs line-clamp-3 leading-tight',
  movieDate: 'font-thin text-xs',
  voteGaugeContainer:
    'absolute flex justify-around left-2 top-[69.5%] bg-[#081C22] rounded-full',
};

function MovieCard({ img, title, date, vote }) {
  return (
    <div className={style.movieCardContainer}>
      <img className={style.movieImg} src={BASE_URL + img} alt="movie poster" />
      <div className={style.titleContainer}>
        <h1 className={style.movieTitle}>{title}</h1>
        <p className={style.movieDate}>{date}</p>
      </div>
      <div className={style.voteGaugeContainer}>
        <VoteGauge vote={vote} />
      </div>
    </div>
  );
}

export default MovieCard;

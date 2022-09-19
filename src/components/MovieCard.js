import React from 'react';
import VoteGauge from './VoteGauge';
const BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
const GENERIC_PIC =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

const style = {
  movieCardContainer:
    'relative rounded-md m-1 w-1/6 bg-white border border-gray-200 drop-shadow-sm',
  movieImg: 'h-2/3 rounded-t-md w-full object-cover',
  titleContainer: 'h-1/3 pt-7 mx-2 pb-1 flex flex-col content-end',
  movieTitle: 'font-bold text-xs line-clamp-3 leading-tight',
  movieDate: 'font-thin text-xs',
  voteGaugeContainer:
    'absolute flex justify-around left-2 top-[60%] bg-[#081C22] rounded-full',
};

function MovieCard({ img, title, date, vote }) {
  return (
    <div className={style.movieCardContainer}>
      <img
        className={style.movieImg}
        src={img ? BASE_URL + img : GENERIC_PIC}
        alt="movie poster"
      />
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

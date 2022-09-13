import React from 'react'
const BASE_URL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

const testObject = {
    backdrop_path: "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
    title: "Thor: Love and Thunder",
    vote_average: 6.812,
    release_date: "2022-07-06"
}

function MovieCard({img, title, date, vote}) {



  return (
    <div className='rounded-md m-2 w-1/5 bg-white border border-gray-200 drop-shadow-sm'>
        <img className='h-3/4 rounded-t-md object-contain' src={BASE_URL + img} alt="movie poster" />
        <div className='p-2'>
            <h1 className='font-semibold'>{title}</h1>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default MovieCard
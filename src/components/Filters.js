import React from 'react';
import { useNavigate } from 'react-router-dom';
import requests from '../utils/requests';

function Filters() {
  let navigate = useNavigate();


  return (
    <div className="rounded-md border bg-white border-gray-200 drop-shadow-sm">
      <div className="flex justify-between ">
        <h2 className="text-sm font-semibold p-2">Filters</h2>
        <h2 className="text-sm font-semibold p-2">1</h2>
      </div>
      <div className="flex flex-wrap">
        {requests.map(({ title, genreCode }) => (
          <button
            key={genreCode}
            className="my-1 mx-2 px-2 border border-inherit rounded-2xl text-xs font-light"
            onClick={() => navigate(`?genre=${genreCode}`)}>
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;

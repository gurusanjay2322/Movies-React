import React from "react";
import { useNavigate } from 'react-router-dom';

function MovieCard({ poster, movieName, releaseDate, imdbId }) {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate(`/movie/${imdbId}`);
  };

  return (
    <div className="flex flex-row justify-between p-4 border border-gray-300 rounded-lg shadow-lg w-full max-w-[450px] text-white bg-slate-800">
      <div className="w-[50vw] bg-slate-800">
        <img
          src={poster}
          alt={movieName}
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between w-[50vw] pl-4 space-y-4 bg-slate-800">
        <div className="bg-slate-800">
          <p className="text-3xl font-black text-yellow-700 text-balance bg-slate-800 ">
            {movieName}
          </p>
          <p className="font-mono bg-slate-800">{new Date(releaseDate).toDateString()}</p>
        </div>
        <button 
          className="font-sans uppercase font-bold tracking-tighter text-right"
          onClick={handleAboutClick}
        >
          About Film
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

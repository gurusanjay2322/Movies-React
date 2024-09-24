import React from "react";
import { useNavigate } from 'react-router-dom';

function MovieCard({ poster, movieName, releaseDate, imdbId }) {
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.stopPropagation();
    navigate(`/movie/${imdbId}`);
  };

  const handleCardClick = () => {
    navigate(`/movie/${imdbId}`);
  };

  return (
    <div 
      className="flex flex-row justify-between p-4 border border-gray-300 rounded-lg shadow-lg w-full max-w-[450px] text-white bg-transparent hover:scale-105 transition ease-in-out cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-[50vw] bg-transparent">
        <img
          src={poster}
          alt={movieName}
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between w-[50vw] pl-4 space-y-4 bg-transparent">
        <div className="bg-transparent">
          <p className="text-3xl font-black text-[#FFF078] text-balance bg-transparent ">
            {movieName}
          </p>
          <p className="font-mono bg-transparent text-[#E90074] ">{new Date(releaseDate).toDateString()}</p>
        </div>
        <button 
          className="font-sans uppercase font-bold tracking-tighter text-[#E90074] text-right"
          onClick={handleAboutClick}
        >
          About Film
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

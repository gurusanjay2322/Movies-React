import React from "react";

function MovieCard({ poster, movieName, releaseDate, genre, trailerLink }) {
  return (
    <div className="flex flex-row justify-between p-4 border border-gray-300 rounded-lg shadow-lg w-full max-w-[450px] text-white bg-slate-800">
      <div className="w-[50vw]">
        <img
          src={poster}
          alt={movieName}
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between w-[50vw] h-[] pl-4 space-y-4">
        <div>
          <p className="text-3xl font-black text-yellow-700 text-balance">
            {" "}
            {movieName}
          </p>
          <p className="font-mono">{new Date(releaseDate).toDateString()}</p>
          {/* <p className="">{genre}</p> */}
        </div>
        {/* <a
          href={trailerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans uppercase font-bold tracking-tighter text-right"
        >
          Watch Trailer
        </a> */}
        <button className="font-sans uppercase font-bold tracking-tighter text-right">
            About Film
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

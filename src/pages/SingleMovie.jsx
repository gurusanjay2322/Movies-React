import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleMovie() {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/movies/${imdbId}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [imdbId]);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6 text-white">
      {movie && (
        <>
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-md my-4" />
          <p>{movie.description}</p>
          <p>Release Date: {new Date(movie.releaseDate).toDateString()}</p>
          <p>Genres: {movie.genres.join(', ')}</p>
          <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Watch Trailer
          </a>
        </>
      )}
    </div>
  );
}

export default SingleMovie;

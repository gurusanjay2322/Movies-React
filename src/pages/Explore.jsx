import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Explore() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/movies');
      setData(response.data); 
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data && data.map((movie) => (
          <MovieCard
            key={movie.imdbId} 
            movieName={movie.title} 
            poster={movie.poster} 
            releaseDate={movie.releaseDate} 
            genre={movie.genres} 
            trailerLink={movie.trailerLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Explore;

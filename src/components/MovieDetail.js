import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = { title: `Movie ${id}`, description: `Description for movie ${id}` };

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/book/${id}`}>Book Now</Link>
    </div>
  );
};

export default MovieDetail;

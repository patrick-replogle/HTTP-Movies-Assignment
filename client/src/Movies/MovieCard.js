import React from "react";
import axios from "axios";

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;

  // const deleteMovie = e => {
  //   e.preventDefault();
  //   const newArray = movieId => {
  //     return props.movies.filter(item => item.id !== movieId);
  //   };
  //   axios
  //     .delete(`http://localhost:5000/api/movies/${id}`)
  //     .then(res => props.setMovies(newArray));
  //   props.history.push("/").catch(err => console.log(err));
  // };

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      {/* <button className="button">Delete</button>
      <button className="button">Edit</button> */}
    </div>
  );
};

export default MovieCard;

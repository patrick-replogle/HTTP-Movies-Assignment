import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateForm = props => {
  const [input, setInput] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  //find id of movie to edit
  const id = props.match.params.id;

  //fetch the data for that specific movie(id) and set input fields to populate the data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setInput(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleStars = e => {
    setInput({ ...input, stars: e.target.value.split(", ") });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, input)
      .then(() => props.history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={input.title}
        />

        <input
          type="text"
          name="director"
          onChange={handleChange}
          placeholder="director"
          value={input.director}
        />

        <input
          type="text"
          name="metascore"
          onChange={handleChange}
          placeholder="metascore"
          value={input.metascore}
        />

        <input
          type="text"
          name="stars"
          onChange={handleStars}
          placeholder="stars"
          value={input.stars}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UpdateForm;

import React, { useState } from "react";
import axios from "axios";

const UpdateForm = props => {
  const [input, setInput] = useState(props.movie);

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/movies/`);
  };
  return (
    <>
      <form>
        <input type="text" placeholder="test" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input />
      </form>
    </>
  );
};

export default UpdateForm;

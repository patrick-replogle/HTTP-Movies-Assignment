import React from "react";

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
        title: "",
        director: "",
        metascore: "",
        stars: ""
      }
    };
  }
  handleChange = e => {
    this.setState({
      ...this.state.input,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            placeholder="title"
            value={this.state.input.title}
          />
          <input
            type="text"
            name="director"
            onChange={this.handleChange}
            placeholder="director"
            value={this.state.input.director}
          />
          <input
            type="text"
            name="metascore"
            onChange={this.handleChange}
            placeholder="metascore"
            value={this.state.input.metascore}
          />
          <input
            type="text"
            name="stars"
            onChange={this.handleChange}
            placeholder="stars"
            value={this.state.input.stars}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default AddForm;

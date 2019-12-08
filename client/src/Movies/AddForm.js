import React from "react";
import axios from "axios";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      director: "",
      metascore: "",
      stars: []
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => console.log(err));
    this.setState({
      input: {
        title: "",
        director: "",
        metascore: "",
        stars: []
      }
    });
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
            value={this.state.title}
          />
          <input
            type="text"
            name="director"
            onChange={this.handleChange}
            placeholder="director"
            value={this.state.director}
          />
          <input
            type="text"
            name="metascore"
            onChange={this.handleChange}
            placeholder="metascore"
            value={this.state.metascore}
          />
          {/* <input
            type="text"
            name="stars"
            onChange={this.handleChange}
            placeholder="stars"
            value={this.state.stars}
          /> */}
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default AddForm;

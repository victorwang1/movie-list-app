import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd({title: this.state.movieTitle});
    this.setState({movieTitle: ''});
  }

  handleChange(event) {
    this.setState({movieTitle: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.movieTitle} onChange={this.handleChange} />
          <button>Add</button>
        </form>
      </div>
    )
  }
}


export default AddMovie;

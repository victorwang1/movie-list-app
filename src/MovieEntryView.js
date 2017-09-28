import React, { Component } from 'react';

class MovieEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: String(this.props.movie.watched ? 'green' : 'grey')
    }

    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched() {
    this.props.movie.watched = !this.props.movie.watched;
    this.setState({buttonColor: String(this.props.movie.watched ? 'green' : 'grey')})
  }

  render() {
    return (
      <div>
        <span> {this.props.movie.title} </span>
        <button onClick={this.toggleWatched}
                style={{'backgroundColor': this.state.buttonColor}}> Watched </button>
      </div>
    )
  }
}



export default MovieEntry;

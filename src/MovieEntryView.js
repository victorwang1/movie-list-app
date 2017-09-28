import React, { Component } from 'react';

class MovieEntry extends Component {
  render() {
    return (
      <div>
        <span> {this.props.movie.title} </span>
        <button onClick={() => this.props.toggleWatched(this.props.index)}
                style={{'backgroundColor': (this.props.movie.watched ? 'green' : 'grey')}}> Watched </button>
      </div>
    )
  }
}



export default MovieEntry;

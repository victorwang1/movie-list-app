import React, { Component } from 'react';
import MovieEntry from './MovieEntryView.js'

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => <MovieEntry key={index} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;

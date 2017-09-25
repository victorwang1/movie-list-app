import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieListView.js'
import Search from './SearchView.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [ {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'} ]
    }

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(term) {
    var result = this.state.movies.filter((movie) => {
      return movie.title.includes(term);
    })
    this.setState({movies: result});
  }

  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

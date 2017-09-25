import React, { Component } from 'react';
import './App.css';
import AddMovie from './AddMovieView.js'
import Search from './SearchView.js'
import MovieList from './MovieListView.js'

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
    this.onAdd = this.onAdd.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onAdd(title) {
    this.setState({movies: [...this.state.movies, title]})
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
        <AddMovie onAdd={this.onAdd} />
        <Search onSearch={this.onSearch} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import AddMovie from './AddMovieView.js'
import Search from './SearchView.js'
import MovieList from './MovieListView.js'
import Watched from './WatchedView.js'

class App extends Component {
  constructor() {
    super();
    this.data = [ {title: 'Mean Girls', watched: true},
                  {title: 'Hackers', watched: true},
                  {title: 'The Grey', watched: true},
                  {title: 'Sunshine', watched: true},
                  {title: 'Ex Machina', watched: true} ];
    this.state = {movies: this.data.slice()};

    this.onAdd = this.onAdd.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showWatched = this.showWatched.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  onAdd(title) {
    this.data.push(title);
    this.setState({movies: this.data.slice()});
  }

  onSearch(term) {
    this.setState({movies: this.state.movies.filter(movie => movie.title.includes(term))});
  }

  showAll() {
    this.setState({movies: this.data.slice()})
  }

  showWatched(watched = true) {
    this.setState({movies: this.data.filter(movie => movie.watched === watched)});
  }

  toggleWatched(index) {
    var movies = this.state.movies.slice();
    movies[index].watched = !movies[index].watched;
    this.setState({movies: movies});
  }

  render() {
    return (
      <div>
        <AddMovie onAdd={this.onAdd} />
        <Watched showWatched={this.showWatched} />
        <Search onSearch={this.onSearch} showAll={this.showAll} />
        <MovieList movies={this.state.movies} toggleWatched={this.toggleWatched} />
      </div>
    );
  }
}

export default App;

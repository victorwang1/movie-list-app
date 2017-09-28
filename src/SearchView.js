import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(event) {
    if (event) event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  handleChange(event) {
    if (event.target.value === '') this.props.showAll();
    this.setState({term: event.target.value}, () => { this.handleSearch() });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type="text" value={this.state.term} onChange={this.handleChange} />
          <button>Search</button>
        </form>

      </div>
    )
  }
}

export default Search;

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
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  handleChange(event) {
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type="text" value={this.state.term} onChange={this.handleChange} />
        </form>

      </div>
    )
  }
}

export default Search;

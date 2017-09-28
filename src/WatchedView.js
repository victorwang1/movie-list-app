import React, { Component } from 'react';

class Watched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedColor: 'white',
      toWatchColor: 'white'
    }
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
    this.handleToWatchClick = this.handleToWatchClick.bind(this);
  }

  handleWatchedClick() {
    this.props.showWatched(true);
    this.setState({watchedColor: 'green'});
    this.setState({toWatchColor: 'white'});
  }

  handleToWatchClick() {
    this.props.showWatched(false);
    this.setState({watchedColor: 'white'});
    this.setState({toWatchColor: 'green'});
  }

  render() {
    return (
      <div>
        <button style={{'backgroundColor': this.state.watchedColor}}
              onClick={this.handleWatchedClick}>Watched</button>
        <button style={{'backgroundColor': this.state.toWatchColor}}
              onClick={this.handleToWatchClick}>To Watch</button>
      </div>
    )
  }
}

export default Watched;

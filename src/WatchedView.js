import React, { Component } from 'react';

class Watched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedColor: 'white',
      toWatchColor: 'white'
    }
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
              onClick={this.handleWatchedClick.bind(this)}>Watched</button>
        <button style={{'backgroundColor': this.state.toWatchColor}}
              onClick={this.handleToWatchClick.bind(this)}>To Watch</button>
      </div>
    )
  }
}

export default Watched;

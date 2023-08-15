import React, { Component } from 'react';
import Display from './components/Display';
import DownButton from './components/buttons/DownButton';
import UpButton from './components/buttons/UpButton';
import ResetButton from './components/buttons/ResetButton'

export default class App extends Component {
  state = {
    count: 69
  };

  goDown = state => {
    this.setState({
      count: this.state.count-1
    })
  };
  goUp = state => {
    this.setState({
      count: this.state.count+1
    })
  };
  reset = state => {
    this.setState({
      count: 0
    })
  };

  render() {
    this.goDown = this.goDown.bind(this);
    return (
      <div>
        <Display count={this.state.count} />
        <div className='button-array centered'>
          <DownButton goDown={this.goDown} />
          <UpButton goUp={this.goUp} />
          <ResetButton reset={this.reset} />
        </div>
      </div>
    );
  }
}

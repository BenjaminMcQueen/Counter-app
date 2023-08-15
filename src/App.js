import React, { Component } from 'react';
import Display from './components/Display';
import DownButton from './components/buttons/DownButton';
import UpButton from './components/buttons/UpButton';
import ResetButton from './components/buttons/ResetButton';
import Setter from './components/Setter';

export default class App extends Component {
  state = {
    count: 0,
    timeDirection: "still"
  };

  goDown = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  goUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  reset = () => {
    this.setState({
      count: 0
    });
  };
  setValue = e => {
    e.preventDefault();
    this.setState({
      count: e.target.newVal.value
    })
  }

  render() {
    if (this.state.timeDirection === "up")
    {
      setTimeout(this.goUp, 1000);
    }
    else if (this.state.timeDirection === "down")
    {
      setTimeout(this.goDown, 1000);
    }

    return (
      <div className='app'>
        <Display count={this.state.count} />
        <div className='button-array centered wider'>
          <DownButton goDown={this.goDown} />
          <UpButton goUp={this.goUp} /> <br/>
          <ResetButton reset={this.reset} />
        </div>
        {/* <form className='setter centered wider' onSubmit={this.setValue}>
          <input id='newVal' type='text' placeholder='input value here'></input>
          <button>Set Count</button>
        </form> */}
        <Setter setValue={this.setValue} />
        {/* <TimerManager startTimer={this.startTimer} remiTtrats={this.remiTtrats}/> */}
      </div>
    );
  }
}

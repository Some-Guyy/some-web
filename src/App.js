import React, { Component } from 'react';
import Header from './components/layout/Header';
import Countdown from './components/Countdown';
import Countdown2 from './components/Countdown2';

import './App.css';

export default class App extends Component {
  state = {
    countdown: 'normal'
  }

  toggleCountdown = (type) => {
    this.setState({ countdown: type });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.countdown === 'normal'
          ? <Countdown date={new Date(Date.UTC(2020, 1, 14, 9, 30)).getTime()} />
          : <Countdown2 date={new Date(Date.UTC(2019, 11, 30, 10)).getTime()} />
        }
        <div style={{ textAlign: 'center' }}>
          <button onClick={this.toggleCountdown.bind(this, 'normal')}>14 Feb</button>&nbsp;&nbsp;
          <button onClick={this.toggleCountdown.bind(this, 'david')}>30 Dec</button>
        </div>
      </div>
    );
  }
}
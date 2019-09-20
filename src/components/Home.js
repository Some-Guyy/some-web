import React, { Component } from 'react';
import Countdown from './countdown/Countdown';
import Test from './Test';

export default class Home extends Component {
  render() {
    return (
      <div className="canvas">
        <Countdown />
        <Test />
      </div>
    );
  }
}
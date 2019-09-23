import React, { Component } from 'react';
import Countdown from './countdown/Countdown';
import Cubes from './three/Cubes';

export default class Home extends Component {
  render() {
    return (
      <div className="onCanvas">
        <Countdown />
        <Cubes />
      </div>
    );
  }
}
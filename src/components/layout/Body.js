import React, { Component } from 'react';

import Countdown from '../countdown/Countdown';

import '../../App.css';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Countdown />
      </div>
    );
  }
}

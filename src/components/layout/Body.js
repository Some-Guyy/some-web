import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Countdown from '../countdown/Countdown';

import '../../App.css';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <Countdown />
        <Footer />
      </div>
    );
  }
}
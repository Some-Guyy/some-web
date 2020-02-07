import React, { Component } from 'react';

import CookieNotice from './components/utilities/CookieNotice';
import Body from './components/layout/Body';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <CookieNotice />
        <Body />
      </div>
    );
  }
}

import React, { Component } from 'react';

import CookieNotice from './components/utilities/CookieNotice';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <CookieNotice />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

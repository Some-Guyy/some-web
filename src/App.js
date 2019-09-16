import React, { Component } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieNotice from './components/utilities/CookieNotice';
import Home from './components/Home';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <CookieNotice />
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
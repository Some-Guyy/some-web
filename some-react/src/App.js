import React, { Component } from 'react';
import Header from './components/layout/Header';
import Countdown from './components/Countdown';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Countdown />
      </div>
    );
  }
}

export default App;
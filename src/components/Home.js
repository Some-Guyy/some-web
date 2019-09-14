import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={styleHome}>
        Hi this is home.
      </div>
    );
  }
}

const styleHome = {
    padding: '10px',
    textAlign: 'center',
    fontSize: '30px'
}
import React from 'react';

import CookieNotice from './components/utilities/CookieNotice';
import Body from './components/layout/Body';

import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <CookieNotice />
      <Body />
    </React.Fragment>
  );
}

import React from 'react';

import CookieNotice from './components/utilities/CookieNotice';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';

import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <CookieNotice />
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

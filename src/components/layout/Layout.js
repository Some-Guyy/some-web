import React from 'react';
import '../../App.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Layout() {
  return (
    <div id="layout">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

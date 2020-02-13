import React, { useState } from 'react';
import '../../App.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Layout() {
  const [appView, setAppView] = useState('home');
  const appSelect = appName => setAppView(appName);
  return (
    <div id="layout">
      <Header appSelect={appSelect} />
      <Body appView={appView} appSelect={appSelect} />
      <Footer />
    </div>
  )
}

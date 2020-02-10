import React, { useState } from 'react';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Countdown from '../countdown/Countdown';

import '../../App.css';

export default function Body() {
  const [appView, setAppView] = useState('home');
  const appSelect = appName => setAppView(appName);
  return (
    <React.Fragment>
      <Header appSelect={appSelect} />
      {
        appView === 'home'
          ? <Home appSelect={appSelect} />
          : <Countdown />
      }
      <Footer />
    </React.Fragment>
  )
}

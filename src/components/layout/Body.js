import React, { useState } from 'react';

import AppList from './AppList';
import Countdown from '../countdown/Countdown';

import '../../App.css';

export default function Body() {
  const [appView, setAppView] = useState('home');
  const appSelect = appName => setAppView(appName);
  return (
    <React.Fragment>
      {
        appView === 'home'
          ? <AppList appSelect={appSelect} />
          : <Countdown />
      }
    </React.Fragment>
  )
}

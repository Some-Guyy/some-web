import React, { useState } from 'react';

import AppList from './AppList';
import Countdown from '../countdown/Countdown';

import '../../App.css';

export default function Body() {
  const [appView, setAppView] = useState('home');
  return (
    <React.Fragment>
      {
        appView === 'home'
          ? <AppList />
          : <Countdown />
      }
    </React.Fragment>
  )
}

import React, { useState } from 'react';

import Countdown from '../countdown/Countdown';

import '../../App.css';

export default function Body() {
  const [appView, setAppView] = useState('');
  return (
    <React.Fragment>
      {appView === ''
        ? <Countdown />
        : <p>hi</p>}
    </React.Fragment>
  )
}

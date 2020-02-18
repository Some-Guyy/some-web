import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../App.css';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import Countdown from '../countdown/Countdown';

export default function Layout() {
  return (
    <div id="layout">
      <BrowserRouter>
        <Header />
        <div id="body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countdown" exact component={Countdown} />
            <Route path="/" render={_ => <p style={{ textAlign: 'center', padding: '10px', fontSize: '24px' }}>Sorry man, no such page exists.</p>} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

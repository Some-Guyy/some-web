import React from 'react';
import './App.css';

import CookieNotice from './components/utilities/CookieNotice';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <React.Fragment>
      <CookieNotice />
      <Layout />
    </React.Fragment>
  );
}

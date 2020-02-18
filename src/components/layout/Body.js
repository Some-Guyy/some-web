import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../App.css';

import Home from './Home';
import Countdown from '../countdown/Countdown';

export default function Body(props) {
    return (
        <div id="body">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/countdown" exact component={Countdown} />
                    <Route path="/" render={_ => <p style={{ textAlign: 'center', padding: '10px', fontSize: '24px' }}>Sorry man, no such page exists.</p>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

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
                </Switch>
            </BrowserRouter>
        </div>
    )
}

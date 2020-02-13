import React from 'react';
import '../../App.css';

import Home from './Home';
import Countdown from '../countdown/Countdown';

export default function Body(props) {
    return (
        <React.Fragment>
            {
                props.appView === 'home'
                    ? <Home appSelect={props.appSelect} />
                    : <Countdown />
            }
        </React.Fragment>
    )
}

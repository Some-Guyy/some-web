import React from 'react';

import Canvas from '../utilities/Canvas';

import '../../App.css';

export default function AppList(props) {
    return (
        <div style={{ textAlign: 'center' }}>
            <Canvas />
            <p className="textLink" onClick={_ => props.appSelect('countdown')} style={{ fontSize: '20px' }}>Click here for the countdown app!</p>
        </div>
    )
}

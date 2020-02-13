import React from 'react';

import Canvas from '../utilities/Canvas';

import '../../App.css';

export default function AppList(props) {
    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <p style={{ fontSize: '24px' }}>Hi, this is just some website.<br />While you're here, go ahead and leave your mark below!</p>
            <Canvas />
            <p className="textLink" onClick={_ => props.appSelect('countdown')} style={{ fontSize: '20px' }}>Click here for the countdown app!</p>
        </div>
    )
}

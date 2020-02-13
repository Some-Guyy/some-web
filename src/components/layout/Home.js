import React from 'react';
import '../../App.css';

import Canvas from '../utilities/Canvas';
import clockIcon from '../../assets/icons/icons8-clock-128.png';

export default function AppList(props) {
    const apps = [{ name: 'Countdown', codeName: 'countdown', iconPath: clockIcon }];
    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <p style={{ fontSize: '24px' }}>Hi, this is just some website.<br />While you're here, go ahead and leave your mark below!</p>
            <Canvas />
            <p style={{ fontSize: '24px', textDecoration: 'underline' }}>Check out some other apps we have.</p>
            {apps.map(app => <div className="app textLinkLight" onClick={_ => props.appSelect(app.codeName)}><img src={app.iconPath} alt="icon" /><p style={{ fontSize: '18px' }}>{app.name}</p></div>)}
        </div>
    )
}

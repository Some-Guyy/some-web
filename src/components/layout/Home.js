import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import Canvas from '../utilities/Canvas';
import clockIcon from '../../assets/icons/Clock.png';

export default function AppList() {
    const apps = [{ name: 'Countdown', route: '/countdown', iconPath: clockIcon }];
    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <p style={{ fontSize: '24px' }}>Hi, this is just some website.<br />While you're here, go ahead and leave your mark below!</p>
            <Canvas />
            <p style={{ fontSize: '24px', textDecoration: 'underline' }}>Check out some other apps we have.</p>
            {apps.map(app => <Link to={app.route} className="app textLinkLight"><img src={app.iconPath} alt="icon" /><p style={{ fontSize: '18px' }}>{app.name}</p></Link>)}
        </div>
    )
}

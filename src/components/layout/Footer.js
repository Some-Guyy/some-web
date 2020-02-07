import React from 'react';

import '../../App.css';
const pckg = require('../../../package.json')

export default function Footer() {
    return (
        <footer className="colorBackAccent">
            <span style={{ float: "left", marginLeft: '5px' }}>Ⓢ 2020 - Some Guy. Some Rights Reserved.</span>
            <span style={{ float: "right", marginRight: '5px' }}>v{pckg.version}</span>
        </footer>
    )
}

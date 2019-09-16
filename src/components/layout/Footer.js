import React from 'react';

import '../../App.css';
const pckg = require('../../../package.json')

export default function Footer() {
    return (
        <footer className="colorBackDominant" style={styleFooter}>
            <span style={{ float: "left", marginLeft: '5px' }}>Ⓢ 2019 - Some Guy. Some Rights Reserved.</span>
            <span style={{ float: "right", marginRight: '5px' }}>v{pckg.version}</span>
        </footer>
    )
}

const styleFooter = {
    width: '100%',
    height: '20px',
    bottom: '0',
    position: 'absolute',
    fontSize: '14px',
    padding: '2px'
}
import React from 'react';

import '../../App.css';

export default function Header() {
    return (
        <header className="colorBackDominant" style={styleHeader}>
            <p style={{ fontSize: '35px', fontWeight: '700' }}>Some Website</p>
        </header>
    )
}

const styleHeader = {
    textAlign: 'center',
    padding: '10px'
}
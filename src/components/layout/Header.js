import React from 'react';

export default function Header() {
    return (
        <header style={styleHeader}>
            <p style={{ fontSize: '35px', fontWeight: 'bold' }}>Some Website</p>
        </header>
    )
}

const styleHeader = {
    backgroundColor: '#3dd465',
    textAlign: 'center',
    padding: '10px'
}
import React from 'react';

export default function Header() {
    return (
        <header style={styleHeader}>
            <h1>Some Website</h1>
        </header>
    )
}

const styleHeader = {
    backgroundColor: '#3dd465',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
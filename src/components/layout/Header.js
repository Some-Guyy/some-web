import React from 'react';

import '../../App.css';

export default function Header(props) {
    return (
        <header className="colorBackAccent">
            <span id="headerText" onClick={_ => props.appSelect('home')}>Some Website</span>
        </header>
    )
}

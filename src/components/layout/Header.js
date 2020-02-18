import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Header() {
    return (
        <header className="colorBackAccent">
            <Link to="/" id="headerText">Some Website</Link>
        </header>
    )
}

import React from 'react';
import logo from "../../logo.svg";
import './Navbar.scss';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="city tours company"/>
                <ul className="nav-links">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link active">Tours</a></li>
                </ul>
            </nav>
        </div>
    )
}
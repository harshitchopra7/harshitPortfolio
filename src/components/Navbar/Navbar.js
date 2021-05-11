import React from 'react';
import './Navbar.css';

function Navbar() {

    var name = "<HC /> "

    return (
        <div className="navbar">
            <div className="nav_left">
                <p>{name}</p>
            </div>
            <div className="nav_right">
                <p>About</p>
                <p>Tools</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Navbar;

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/upload">Upload Document</Link></li>
                <li><Link to="/documents">View Documents</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contract">Contract</Link>
            <Link to='/friends'>Friends</Link>
        </nav>
    );
};

export default Header;
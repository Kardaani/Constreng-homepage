'use strict';

import React from 'react';
import { Link } from 'react-router';


const Header = (props) => {

    return (
        <header className="main">
        <div className="container">

            <div className="logo">
                <Link to="/"></Link>
            </div>

            <nav>
                <Link to="/" activeClassName="active">Home</Link>
                <span className="sep"></span>
                <Link to="/services" activeClassName="active">Services</Link>
                <span className="sep"></span>
                <Link to="/about" activeClassName="active">About</Link>
                <span className="sep"></span>
                <Link to="/contact-us" activeClassName="active">Contact Us</Link>
            </nav>

        </div>
        </header>
    );

}

export default Header;
